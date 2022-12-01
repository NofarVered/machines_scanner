drop_db = "DROP DATABASE machines_scanners;"
create_db = "CREATE DATABASE machines_scanners;"
use_db = "USE machines_scanners;"


create_scanners_table = """CREATE TABLE scanners(
    scanner_name VARCHAR(255) PRIMARY KEY
);"""

create_scan_credentials_table = """CREATE TABLE scan_credentials(
    user_name VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);"""

create_scan_iterations_table = """CREATE TABLE scan_iterations(
    scan_iteration_id INT NOT NULL PRIMARY KEY,
    scan_iteration_name VARCHAR(255),
    scan_status VARCHAR(255),
    csv_file VARCHAR(255),
    scanner_name VARCHAR(255),

    last_run_time_date DATETIME,
    user_credential VARCHAR(255),

    FOREIGN KEY(scanner_name) REFERENCES scanners(scanner_name),
    FOREIGN KEY(user_credential) REFERENCES scan_credentials(user_name)
);"""

create_machines_table = """CREATE TABLE machines(
    machine_id INT PRIMARY KEY,
    operating_platform VARCHAR(255),
    ip_address VARCHAR(255)
);"""


create_accounts_table = """CREATE TABLE accounts(
    account_name VARCHAR(255),
    scan_iteration_id INT,
    machine_id INT,
    is_privileged boolean,
    set_password_date DATETIME,
    group_name VARCHAR(255),
    is_removed boolean,
    
    FOREIGN KEY(machine_id) REFERENCES machines(machine_id),
    FOREIGN KEY(scan_iteration_id) REFERENCES scan_iterations(scan_iteration_id)
);
"""


mock_accounts = "./mocks/accounts.json"
mock_machines = "./mocks/machines.json"
mock_scanners = "./mocks/scanners.json"
mock_scan_iterations = "./mocks/scan_iterations.json"
mock_scan_credentials = "./mocks/scan_credentials.json"
