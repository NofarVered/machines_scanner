from dataclasses import dataclass

@dataclass
class Scans():
    scan_id: int
    success_date: str
    execute_by: str
    scan_name: str
    scan_status: str
    scan_file: str
    is_most_recent: bool
    cpm_id: int

