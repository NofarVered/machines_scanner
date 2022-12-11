from enum import Enum


class scan_status(Enum):
    pending = 1
    stoped = 2
    done = 3
    failed = 4


class operating_platform(Enum):
    windows = 1
    mac = 2
    done = 3
    linux = 4
