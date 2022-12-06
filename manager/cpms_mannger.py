from fastapi import APIRouter, status, Response, Request
from fastapi.responses import JSONResponse
from repositories.models.cpm import Cpm
from repositories.cpms_repository import get_cpms_list

cpm = APIRouter()


@cpm.get('/cpms', response_class=JSONResponse, status_code=status.HTTP_200_OK)
def getCpm():
    cpm_list = get_cpms_list()
    return cpm_list
