from pydantic import BaseModel


class ScanTransaction(BaseModel):
    transaction_id: int
    transaction_name: str
    status: str
    creation_time: str
    last_run_time: str
    csv_file: str
    scanner_name: str
    it_manager_id: int
