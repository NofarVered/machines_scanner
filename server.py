from fastapi import FastAPI ,status
import uvicorn
# from server.routes.routes.users_route import users
from src.manager.account_manager import account
from src.manager.scans_manager import scans
from src.manager.machins_manager import machine
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    'http://localhost:3000',
    "http://localhost:3001"
]

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

@app.get('/sanity' , response_class= JSONResponse , status_code= status.HTTP_200_OK)
def root():
    return {"message":"Server is up and running"}



if __name__ == "__main__":
    uvicorn.run("server:app",host="localhost", port=8000,reload=True)
