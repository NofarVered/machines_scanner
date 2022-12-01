import wmi
# ip = '137.83.214.225'
# username = "il\abenbasat"
# password = 'Monster09091970!'

# ip = '93.173.65.223'
# username = "laptop-rp8hcodo\amitb"
# password = '1997'
# try:
#     print ("Establishing connection to %s" %ip)
#     connection = wmi.WMI(ip, user=username, password=password)
#     print ("Connection established")
# except wmi.x_wmi:
#     print ("Your Username and Password of  are wrong.")


c = wmi.WMI()



for os in c.Win32_OperatingSystem():
  print (os.Caption)


  for u in c.Win32_UserAccount(["Name"]): #Net
    print (u.Name)
