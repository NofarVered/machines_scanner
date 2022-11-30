from dataclasses import dataclass

@dataclass
class Scan:
    csv: str
    user: str
    password: str