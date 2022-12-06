from fastapi import APIRouter , status , Response ,Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper 
from repositories.models.account import Account
from repositories.accounts_repository import Acount_repo

db = db_wrapper()
account = APIRouter()

@account.get('/accounts',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getAccounts():
    users_list = db.execute_select_all_query(querys.sql_select_all_users)
    users_list = [Account("Or",1,True,"group_1",100)]
    return users_list

@account.get('/accounts/{machine_id}',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getAccountsByMachine(machine_id):
    users_list = db.execute_select_all_query(querys.sql_select_all_users_by_machine)
    # users_list = [User("Or",True,"01/12/2022",1,machine_id,"best group")]
    return users_list

@account.get('/accounts/stats',response_class= JSONResponse , status_code= status.HTTP_200_OK)
def getAccountsStats():
    privilliged_stats = db.execute_select_all_query(querys.sql_select_all_privilliged_machine)
    stats = {
                "privilliged_stats": privilliged_stats
            }
    return stats

@account.delete('/accounts/{acount_name}',response_class= JSONResponse , status_code= status.HTTP_204_NO_CONTENT)
def deleteAcountByAcountName(acount_name):
    Acount_repo.delete_acount(acount_name)
    return {
            "success": True
            
           }