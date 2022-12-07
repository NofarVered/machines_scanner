from repositories.models.scans import Scans
from repositories.sql_wrapper import db_wrapper
from datetime import datetime


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

db = db_wrapper()

class Scans_repo:
    def addScan(scan):
        db.execute_insert_query(insert_to_scan_requests_table,(scan["success_date"],scan['execute_by'],scan['scan_name'],scan['scan_status'],scan['scan_file'],scan['is_most_recent'],scan['cpm_id']))
        return scan
    
    def getRecentScan():
        scans = db.execute_select_all_query(sql_select_recent_scans)
        return scans

    def getScansByHistoryId(scan_id):
        scans = db.execute_select_all_query(sql_select_history_scans,(scan_id))
        return scans

    def reRunScan(scan):
        now = datetime.now()
        date_string = now.strftime("%Y-%m-%dT%H:%M:%S")
        db.execute_update_query(sql_select_scans_by_id_date,(scan['scan_id'],scan["success_date"]))
        scan = db.execute_insert_query(insert_to_scan_requests_table_with_id,(scan['scan_id'],date_string,scan['execute_by'],scan['scan_name'],scan['scan_status'],scan['scan_file'],scan['is_most_recent'],scan['cpm_id']))
        return scan