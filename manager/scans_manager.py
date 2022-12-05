from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper 
from repositories.models.scans import Scans

db = db_wrapper()
scans = APIRouter()



@scans.post('/scans', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
def addScan(scan:Scans):
    db.execute_insert_query(querys.sql_insert_scan,(scan.transaction_id,scan.transaction_name,scan.status,scan.csv_file,scan.scanner_name,scan.last_run_time,scan.user_login))
    return {
            "success": True,
            "payload": scan
            }

@scans.get('/scans',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getScans():

    scans_list = [Scans(1,"1.1.1990","Or","test","pending","csv.file",True,1) ]
    return {
            "success": True,
            "payload": scans_list
            }

@scans.post('/scans/{scan_transaction_id}', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
async def addScan(request: Request): 
    req = await request.json()
    ## need to implement the change status logic
    return {

            "success": True,
            "payload": req
            }