from pydantic import BaseModel


class ItManager(BaseModel):
    id: int
    user_name: str
    first_name: str
    last_name: str
    email: str
    hashed_password: str
