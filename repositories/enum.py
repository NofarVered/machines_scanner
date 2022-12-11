from enum import Enum


class scan_status(Enum):
    pending = 1
    stoped = 2
    done = 3
    failed = 4


class enum_status(Enum):
    exists = 1
    removed = 2
    readded = 3


class operating_platform(Enum):
    windows = 1
    mac = 2
    linux = 3
