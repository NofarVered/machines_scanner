from dataclasses import dataclass

@dataclass
class User:
    account_name:str
    priviliged:bool
    set_passwored_date:str
    scan_transaction_id:int
    machine_id:int
    group_name:str