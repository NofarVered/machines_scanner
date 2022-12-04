from pydantic import BaseModel


class Cpm(BaseModel):
    cpm_id: int
    ip_adress: str
    last_activity: str

