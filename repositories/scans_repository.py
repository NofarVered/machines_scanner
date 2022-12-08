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

sql_select_accounts = """
                            SELECT *
                            FROM accounts a JOIN machines_accounts ma ON a.account_name = ma.account_name
                            """  
sql_select_cpm_id = """
                        SELECT c.cpm_id
                        FROM cpms c
                        WHERE c.ip_addresses = %s
                        """

sql_select_recent_scans_by_id = """
                                SELECT *
                                FROM scan_requests
                                WHERE scan_requests.is_most_recent = 1 AND scan_requests.scan_id = %s
                                """
db = db_wrapper()

class Scans_repo:

    def convertToIpString(ips):
        ips_string = ""
        for ip in ips:
            ips_string +=  ip['ip_addresses '][:-2] + " "
        return ips_string

    def addScan(scan):
        now = datetime.now()
        date_string = now.strftime("%Y-%m-%dT%H:%M:%S")
        cpm_id = db.execute_select_one_query(sql_select_cpm_id,(scan['cpm_ip_address']))['cpm_id']
        ips_string = Scans_repo.convertToIpString(scan["scan_file"])
        id = db.execute_insert_query(insert_to_scan_requests_table,(date_string,scan['execute_by'],scan['scan_name'],3,ips_string,1,cpm_id))
        # new_accounts = get_users_from_new_scan(scan["ips_string"])
        new_accounts = get_users_from_new_scan()
        old_accounts = Scans_repo.getAccounts()
        for new_account in new_accounts:
            for old_account in old_accounts:
                if (( new_account['account_name'] == old_account['account_name'] ) and ( new_account['machine_id'] == old_account['machine_id'] ) ):
                            if old_account['enum_status'] == 2:
                                new_account['enum_stauts'] = 3
                            else:
                                new_account['enum_stauts'] = 1
                else:
                    new_account['enum_stauts'] = 1

            db.execute_insert_query(insert_to_accounts_table,(new_account['account_name'],id,new_account['is_privileged'],new_account['group_name'],new_account['password_age']))
            db.execute_insert_query(insert_to_machine_accounts_table,(new_account['account_name'],new_account['machine_id'],new_account['enum_stauts']))
        return new_accounts
    
    def getRecentScan():
        scans = db.execute_select_all_query(sql_select_recent_scans)
        return scans

    def getScansByHistoryId(scan_id):
        scans = db.execute_select_all_query(sql_select_history_scans,(scan_id))
        return scans

    def getAccounts():
        accounts = db.execute_select_all_query(sql_select_accounts)
        return accounts

    def reRunScan(scan_id):
        now = datetime.now()
        date_string = now.strftime("%Y-%m-%dT%H:%M:%S")
        scan = db.execute_select_one_query(sql_select_recent_scans_by_id,(scan_id))
## update the last scan
        db.execute_update_query(sql_select_scans_by_id_date,(scan['scan_id'],scan["success_date"]))
## get the accounts of the old scan
        old_accounts = Scans_repo.getAccounts()
## insert a scan with the same id
        scan = db.execute_insert_query(insert_to_scan_requests_table_with_id,(scan['scan_id'],date_string,scan['execute_by'],scan['scan_name'],scan['scan_status'],scan['scan_file'],scan['is_most_recent'],scan['cpm_id']))
## getting new acoounts
        new_accounts = get_users_from_new_scan(scan["scan_file"])
## checking for diff("enum_status" is enum. 1= "exists", 2="removed", 3="readded")
        for new_account in new_accounts:
            for old_account in old_accounts:
                if (( new_account['account_name'] == old_account['account_name'] ) and ( new_account['machine_id'] == old_account['machine_id'] ) ):
                            if old_account['enum_status'] == 2:
                                new_account['enum_stauts'] = 3
                            else:
                                new_account['enum_stauts'] = 1
                else:
                    new_account['enum_stauts'] = 1
## adding accounts scanned by the scans
            db.execute_insert_query(insert_to_accounts_table,(new_account['account_name'],new_account['scan_id'],new_account['is_privilege'],new_account['group_name'],new_account['password_age']))
            db.execute_insert_query(insert_to_machine_accounts_table,(new_account['account_name'],new_account['machine_id'],new_account['enum_status']))
        return old_accounts