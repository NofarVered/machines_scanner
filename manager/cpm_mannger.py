from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper
from repositories.models.cpm import Cpm

db = db_wrapper()
cpm = APIRouter()


@cpm.get('/cpm',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getCpm():
    # cpm_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    cpm_list = []
    return cpm_list