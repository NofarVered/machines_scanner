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
    result = Accounts_repo.getAllAccounts()
    return {"result": result}


@account.get(
    "/accounts/removed", response_class=JSONResponse, status_code=status.HTTP_200_OK
)
def getAllRemovedAccounts():
    removedAccounts = Accounts_repo.getAllRemovedAccounts()
    return removedAccounts


@account.put(
    "/accounts/{account_name}/{machine_id}",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def updateExistsAccountByName(account_name, machine_id):
    Accounts_repo.removed_acount(account_name, machine_id)
    return {"success": True}
