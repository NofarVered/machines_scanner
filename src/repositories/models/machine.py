from pydantic import BaseModel


class Machine(BaseModel):
    machine_id: int
    platform: str
