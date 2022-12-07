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


@account.put('/accounts/{account_name}', response_class=JSONResponse, status_code=status.HTTP_204_NO_CONTENT)
def updateRemovedAccountByName(account_name):
    Accounts_repo.removed_acount(account_name)
    return {"success": True}
