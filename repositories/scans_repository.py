from repositories.models.scans import Scans
from repositories.sql_wrapper import db_wrapper


insert_to_scan_requests_table = """
                                INSERT IGNORE into scan_requests (success_date, execute_by, scan_name,scan_status,scan_file,is_most_recent, cpm_id)
                                values (%s, %s, %s, %s, %s, %s, %s)
                                """


sql_select_recent_scans = """
                            SELECT *
                            FROM scan_requests
                            WHERE is_most_recent = 1
                            """

sql_select_history_scans = """
                            SELECT *
                            FROM scan_requests
                            WHERE is_most_recent = 0 AND scan_requests.scan_id = %s
                            """

db = db_wrapper()

class Scans_repo:
    def addScan(scan:Scans):
        db.execute_insert_query(insert_to_scan_requests_table,(scan["success_date"],scan['execute_by'],scan['scan_name'],scan['scan_status'],scan['scan_file'],scan['is_most_recent'],scan['cpm_id']))
        return scan
    
    def getRecentScan():
        scans = db.execute_select_all_query(sql_select_recent_scans)
        return scans

    def getScanById(scan_id):
        scans = db.execute_select_all_query(sql_select_history_scans,(scan_id))
        return scans

