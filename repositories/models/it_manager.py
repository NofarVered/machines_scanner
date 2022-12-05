from dataclasses import dataclass

@dataclass
class ItManager():
    id: int
    user_name: str
    first_name: str
    last_name: str
    email: str
    hashed_password: str
