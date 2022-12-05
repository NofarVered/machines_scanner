from dataclasses import dataclass

@dataclass
class Account():
    account_id: int
    account_name: str
    privilege: bool
    set_password_date: str
    scan_transaction: int
    ip_address: str
