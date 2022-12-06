from fastapi import APIRouter, status, Response, Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper
from repositories.models.account import Account
from repositories.accounts_repository import Accounts_repo

db = db_wrapper()
account = APIRouter()


@account.get("/accounts", response_class=JSONResponse, status_code=status.HTTP_200_OK)
def getAccounts():
    return Accounts_repo.getAllAccounts()


# @account.get(
#     "/accounts/{machine_id}",
#     response_class=JSONResponse,
#     status_code=status.HTTP_200_OK,
# )
# def getAccountsByMachine(machine_id):
#     users_list = db.execute_select_all_query(querys.sql_select_all_users_by_machine)
#     # users_list = [User("Or",True,"01/12/2022",1,machine_id,"best group")]
#     return users_list


# @account.get(
#     "/accounts/stats", response_class=JSONResponse, status_code=status.HTTP_200_OK
# )
# def getAccountsStats():
#     privilliged_stats = db.execute_select_all_query(
#         querys.sql_select_all_privilliged_machine
#     )
#     stats = {"privilliged_stats": privilliged_stats}
#     return stats
