from dataclasses import dataclass

@dataclass
class Machine():
    machine_id: int
    operating_platform: str
    ip_address: str
