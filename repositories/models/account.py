from dataclasses import dataclass

@dataclass
class Account():
    account_name: str
    scan_id: int
    is_privilege: bool
    group_name: str
    password_age: int