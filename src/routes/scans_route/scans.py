from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from ...db_proxy import querys 
from ...db_proxy.proxy import db_proxy 
from ...models.scan import Scan
db = db_proxy()
scans = APIRouter()


@scans.post('/scans', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
def addScan(scan:Scan):  
    return {
            "success": True,
            "payload": scan
            }

@scans.get('/scans',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getScans():
    # scans_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    scans_list = [Scan(1,"first_scan","active","mock.csv","my_scanner","1/1/2022","user123","password123")]
    return scans_list

@scans.post('/scans/{scan_transaction_id}', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
def addScan(status): 
    scan:Scan
    return {

            "success": True,
            "payload": scan
            }