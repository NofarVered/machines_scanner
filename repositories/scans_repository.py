from repositories.models.scans import Scans
from repositories.sql_wrapper import db_wrapper
from datetime import datetime
from utility.scan_logic import get_users_from_new_scan

insert_to_scan_requests_table = """
                                INSERT IGNORE into scan_requests (success_date, execute_by, scan_name,scan_status,scan_file,is_most_recent, cpm_id)
                                values (%s, %s, %s, %s, %s, %s, %s)
                                """

insert_to_scan_requests_table_with_id = """
                                        INSERT IGNORE into scan_requests (scan_id , success_date, execute_by, scan_name,scan_status,scan_file,is_most_recent, cpm_id)
                                        values (%s,%s, %s, %s, %s, %s, %s, %s)
                                        """


sql_select_recent_scans = """
                            SELECT *
                            FROM scan_requests
                            WHERE scan_requests.is_most_recent = 1
                            """

sql_select_history_scans = """
                            SELECT *
                            FROM scan_requests
                            WHERE scan_requests.is_most_recent = 0 AND scan_requests.scan_id = %s
                            """

sql_select_scans_by_id_date = """
                            UPDATE scan_requests
                            SET is_most_recent = 0
                            WHERE scan_requests.scan_id = %s AND scan_requests.success_date = %s
                            """


insert_to_accounts_table = """
                                INSERT IGNORE into accounts (account_name, scan_id, is_privileged,group_name,password_age)
                                values (%s, %s, %s, %s, %s)
                                """

insert_to_machine_accounts_table = """
                                INSERT IGNORE into machines_accounts (account_name, machine_id, enum_status)
                                values (%s, %s, %s)
                                """

insert_to_machines_table = """
                                INSERT IGNORE into machines (machine_id, operating_platform, ip_address)
                                values (%s, %s, %s)
                                """

sql_select_accounts_by_scan_id = """
                                    SELECT *
                                    FROM accounts a JOIN machines_accounts ma ON a.account_name = ma.account_name
                                    WHERE a.scan_id = %s
                                    """  
sql_select_cpm_id = """
                        SELECT c.cpm_id
                        FROM cpms c
                        WHERE c.ip_addresses = %s
                        """  


db = db_wrapper()

class Scans_repo:
    def addScan(scan):
        now = datetime.now()
        date_string = now.strftime("%Y-%m-%dT%H:%M:%S")
        cpm_id = db.execute_select_one_query(sql_select_cpm_id,(scan['cpm_ip_address']))['cpm_id']
        id = db.execute_insert_query(insert_to_scan_requests_table,(date_string,scan['execute_by'],scan['scan_name'],3,"string of ips",1,cpm_id))
        accounts = get_users_from_new_scan()
        for account in accounts:
            db.execute_insert_query(insert_to_accounts_table,(account['account_name'],id,account['is_privileged'],account['group_name'],account['password_age']))
            db.execute_insert_query(insert_to_machine_accounts_table,(account['account_name'],account['machine_id'],1))
        return accounts
    
    def getRecentScan():
        scans = db.execute_select_all_query(sql_select_recent_scans)
        return scans

    def getScansByHistoryId(scan_id):
        scans = db.execute_select_all_query(sql_select_history_scans,(scan_id))
        return scans

    def getAccountsByScanId(scan_id):
        accounts = db.execute_select_all_query(sql_select_accounts_by_scan_id,(scan_id))
        return accounts

    def reRunScan(scan):
        now = datetime.now()
        date_string = now.strftime("%Y-%m-%dT%H:%M:%S")
## update the last scan
        db.execute_update_query(sql_select_scans_by_id_date,(scan['scan_id'],scan["success_date"]))
## get the accounts of the old scan
        old_accounts = Scans_repo.getAccountsByScanId(scan['scan_id'])
## insert a scan with the same id
        scan = db.execute_insert_query(insert_to_scan_requests_table_with_id,(scan['scan_id'],date_string,scan['execute_by'],scan['scan_name'],scan['scan_status'],scan['scan_file'],scan['is_most_recent'],scan['cpm_id']))
## getting new acoounts
        new_accounts = []
## checking for diff("enum_status" is enum. 1= "exists", 2="removed", 3="readded")
        for account in new_accounts:
            if (account['name'] in old_accounts):
                for old_account in old_accounts:
                    if old_account['name'] == account['name']:
                        if old_account['enum_status'] == 2:
                            account['enum_stauts'] = 3
## adding accounts scanned by the scans
            db.execute_insert_query(insert_to_accounts_table,(account['account_name'],account['scan_id'],account['is_privilege'],account['group_name'],account['password_age']))
            db.execute_insert_query(insert_to_machine_accounts_table,(account['account_name'],account['machine_id'],account['enum_status']))
            db.execute_insert_query(insert_to_machines_table,(account['machine_id'],account['operating_platform'],account['ip_address']))

        return old_accounts
