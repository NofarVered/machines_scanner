from enum import Enum


class enum_status(Enum):
    exists = 1
    removed = 2
    readded = 3


class operating_platform(Enum):
    windows = 1
    mac = 2
    linux = 3
