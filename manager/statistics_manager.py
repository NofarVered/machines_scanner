from fastapi import APIRouter, status, Response, Request
from fastapi.responses import JSONResponse
from repositories import querys
from repositories.sql_wrapper import db_wrapper
from repositories.statistics_repository import Statistics_repo
from repositories.sql_wrapper import connection

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


@statistics.get(
    "/statistics/windowsAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getWindowsAmount():
    return Statistics_repo.getWindowsAmount()


@statistics.get(
    "/statistics/macAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getWindowsAmount():
    return Statistics_repo.getMacAmount()


@statistics.get(
    "/statistics/linuxAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getLinuxAmount():
    return Statistics_repo.getLinuxAmount()


@statistics.get(
    "/statistics/accountsAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getAccountsAmount():
    return Statistics_repo.getAccountsAmount()


@statistics.get(
    "/statistics/machinesAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getMachinesAmount():
    return Statistics_repo.getMachinesAmount()


@statistics.get(
    "/statistics/successfulScansAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getSuccessfulScansAmount():
    return Statistics_repo.getSuccessfulScansAmount()


@statistics.get(
    "/statistics/failedScansAmount",
    response_class=JSONResponse,
    status_code=status.HTTP_200_OK,
)
def getFailedScansAmount():
    return Statistics_repo.getfailedScansAmount()
