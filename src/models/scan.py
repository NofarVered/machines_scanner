from dataclasses import dataclass

@dataclass
class Scan:
    scan_transaction_id:int
    transaction_name:str
    status:str
    csv_file:str
    scanner_name:str
    last_run_time_date:str
    user_login:str
    password:str