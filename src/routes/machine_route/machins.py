from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from ...db_proxy import querys 
from ...db_proxy.proxy import db_proxy 
from ...models.scan import Scan
db = db_proxy()
machine = APIRouter()


@machine.get('/machine',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getMachineOfUser(user):
    # users_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    machine_list = [
                    {"machine_id":1},
                     {"machine_id":2}
                     ]
    return machine_list