from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from ..repositories import querys
from ..repositories.sql_wrapper import db_wrapper
from ..repositories.models.machine import Machine
db = db_wrapper()
machine = APIRouter()


@machine.get('/machine',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getMachineOfUser(user):
    # users_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    machine_list = [
                    {"machine_id":1},
                     {"machine_id":2}
                     ]
    return machine_list