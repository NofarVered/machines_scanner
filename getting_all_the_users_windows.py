
import wmi
c = wmi.WMI("","","")

priviliged_users=[]
nonpriviliged=[]

def get_users_of_machine(): 
    for user in c.Win32_UserAccount(): 
        if check_if_priviliged(user):
            priviliged_users.append(user)
        else:
            nonpriviliged.append(user)


def check_if_priviliged(user):
    if user["Name"]=="Administrator":
        return True;
    return False
    


def see_users_groups():
    for group in c.Win32_Group(): 
        print(group.Caption) 
    for user in group.associators(wmi_result_class="Win32_UserAccount"): 
        print(" [+]", user.Caption)


for u in c.Win32_UserAccount(["Name"]): #Net
    print (u.Name)









