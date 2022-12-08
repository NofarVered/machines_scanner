ips = [
    {"ip_addresses ": "192.158.1.38\r"},
    {"ip_addresses ": "194.167.1.28\r"}
    ]
def convert_to_ip_string(ips):
    ips_string = ""
    for ip in ips:
        ips_string +=  ip['ip_addresses '][:-2] + " "
    return ips_string
print(convert_to_ip_string(ips))