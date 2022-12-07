from fastapi import APIRouter, status, Response, Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper
from repositories.models.account import Account
from repositories.machines_repository import Machines_repo

db = db_wrapper()
machine = APIRouter()


@machine.get("/machines/{account_name}", response_class=JSONResponse, status_code=status.HTTP_200_OK)
def getMachinesByAccount(account_name):
    return Machines_repo.getAllMachinesByAccount(account_name)
