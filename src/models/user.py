from dataclasses import dataclass

@dataclass
class User:
    name: str
    ip_adress: str
    operating_platform: str
    machine_id: str