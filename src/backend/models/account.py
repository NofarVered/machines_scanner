from pydantic import BaseModel


class Account(BaseModel):
    account_id: int
    account_name: str
    operating_platform: str
    privilege: bool
    set_password_date: str
    scan_transaction: int
    ip_address: str
