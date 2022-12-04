import requests

URL = "http://localhost:8000/scans/"

ScanerManager=0

def cpm_ask_for_active_scan():
    flag=True
    while flag: 
        scnas = requests.get(url = URL)
        all_scans = scnas.json()
        active_sacn=[scan for scan in all_scans if scan.status=="Active"]
        if(len(active_sacn)!=0):
            for scan in active_sacn:
                requests.post(url = URL+scan.id , json={"status":"pending"})    
                ScanerManager.getallusers(scan)
