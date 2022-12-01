import requests

URL = "http://localhost:8000/scans/"
URL_CHANGE_STATUS = "http://localhost:8000/scans/status"

ScanerManager=0

def cpm_ask_for_active_scan():
    flag=True;
    while flag:
        scnas = requests.get(url = URL)
        all_scans = scnas.json()
        active_sacn=[scan for scan in all_scans if scan.status=="Active"]
        if(len(active_sacn)!=0):
            scnas = requests.post(url = URL,json={"status":"pending"})    
            for scan in active_sacn:
                ScanerManager.getallusers(scan); 




