import csv

with open("./ip_addresses_mock_file.csv", "r") as file:
    csvreader = csv.reader(file)
    for row in csvreader:
        print(row)
