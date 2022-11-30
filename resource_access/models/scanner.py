from pydantic import BaseModel


class Scanner(BaseModel):
    scanner_id: int
    scanner_name: str
