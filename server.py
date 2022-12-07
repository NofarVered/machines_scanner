from fastapi import FastAPI, status
import uvicorn

# from server.routes.routes.users_route import users
from manager.accounts_manager import account
from manager.scans_manager import scans
from manager.machines_manager import machine
from manager.statistics_manager import statistics
from manager.cpms_mannger import cpm
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["http://localhost:3000", "http://localhost:3003"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(account)
app.include_router(scans)
app.include_router(machine)
app.include_router(statistics)
app.include_router(cpm)


@app.get('/sanity', response_class=JSONResponse, status_code=status.HTTP_200_OK)
def root():
    return {"message": "Server is up and running"}


if __name__ == "__main__":
    uvicorn.run("server:app", host="localhost", port=8000, reload=True)
