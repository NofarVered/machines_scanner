from dataclasses import dataclass

@dataclass
class Scans():
    scan_id: int
    scan_name: str
    success_date: str
    excute_by: str
    status: str
    scan_file: str

