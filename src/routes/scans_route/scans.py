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
            "payload": {
                        "csv":scan.csv,
                        "user": scan.user,
                        "password":scan.password                  
                        }
            }


@scans.get('/scans',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getScans():
    # scans_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    scans_list = [Scan("scans.csv","admin","pass123")]
    return scans_list