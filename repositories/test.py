from datetime import datetime

# datetime object containing current date and time
now = datetime.now()
 # dd/mm/YY H:M:S
dt_string = now.strftime("%Y-%m-%dT%H:%M:%S")
print("date and time =", dt_string)	