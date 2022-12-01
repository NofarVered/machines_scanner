from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from ...db_proxy import querys 
from ...db_proxy.proxy import db_proxy 
from ...models.scan import Scan
db = db_proxy()
scans = APIRouter()


@scans.post('/scans', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
def addScan(scan:Scan):
    db.execute_insert_query(querys.sql_insert_scan,(scan.scan_transaction_id,scan.transaction_name,scan.status,scan.csv_file,scan.scanner_name,scan.last_run_time_date,scan.user_login))
    return {
            "success": True,
            "payload": scan
            }

@scans.get('/scans',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getScans():
    scans_list = db.execute_select_all_query(querys.sql_select_all_scans)
    # scans_list = [Scan(1,"first_scan","active","mock.csv","my_scanner","1/1/2022","user123","password123")]
    return scans_list

@scans.post('/scans/{scan_transaction_id}', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
async def addScan(request: Request): 
    req = await request.json()
    ## need to implement the change status logic
    return {

            "success": True,
            "payload": req
            }