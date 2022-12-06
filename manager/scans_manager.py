from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper 
from repositories.models.scans import Scans
from repositories.scans_repository import Scans_repo

db = db_wrapper()
scans = APIRouter()



@scans.post('/scans', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
async def addScan(request: Request):
    req = await request.json()
    Scans_repo.addScan(req)
    return {
            "success": True,
            "payload": req
            }

@scans.get('/scans',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getScans():

    # scans_list = [Scans(1,"1.1.1990","Or","test","pending","csv.file",True,1) ]
    scans = Scans_repo.getScan()
    return {
            "success": True,
            "payload": scans
            }

@scans.post('/scans/{scan_transaction_id}', response_class= JSONResponse , status_code= status.HTTP_201_CREATED)
async def addScan(request: Request): 
    req = await request.json()
    ## need to implement the change status logic
    return {

            "success": True,
            "payload": req
            }