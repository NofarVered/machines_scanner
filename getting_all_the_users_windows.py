
import wmi
c = wmi.WMI("","","")

for u in c.Win32_UserAccount(["Name"]): #Net
    print (u.Name)





