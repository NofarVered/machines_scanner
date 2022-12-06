from fastapi import APIRouter, status, Response, Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper
from repositories.statistics_repository import Statistics_repo

db = db_wrapper()
statistics = APIRouter()


@statistics.get(
    "/statistics/privilegedAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getPrivilegedAmount():
    return Statistics_repo.getPrivilegedAmount()


@statistics.get(
    "/statistics/nonPrivilegedAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getNonPrivilegedAmount():
    return Statistics_repo.getNonPrivilegedAmount()
