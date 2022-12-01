from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from ...db_proxy.querys import * 
from ...db_proxy.proxy import db_proxy 
from ...models.user import User
db = db_proxy()
users = APIRouter()

@users.get('/users',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getUsers():
    # users_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    users_list = [User("Or",True,"01/12/2022",1,1,"best group")]
    return users_list

@users.get('/users/{machine_id}',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getUsersByMachine(machine_id):
    # users_list = db.execute_select_all_query(querys.sql_select_all_transactions)
    users_list = [User("Or",True,"01/12/2022",1,machine_id,"best group")]
    return users_list