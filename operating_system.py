



from paramiko import SSHClient, AutoAddPolicy
# output_file = 'paramiko.org'
 
 
def paramiko_GKG(hostname, command):
    print('running')
    try:       
         
        # created client using paramiko
        client = SSHClient()
        #LOAD HOST KEYS
        #client.load_host_keys('~/.ssh/known_hosts')
        client.load_host_keys('C:/Users/amitb/ssh/sshkey')
        client.load_system_host_keys()

        #Known_host policy
        client.set_missing_host_key_policy(AutoAddPolicy())


        #client.connect('10.1.1.92', username='root', password='password1')
        client.connect(hostname, username='amitb')
        # below line command will actually
        # execute in your remote machine
        (stdin, stdout, stderr) = client.exec_command(command)
         
        # redirecting all the output in cmd_output
        # variable
        cmd_output = stdout.read()
        print('log printing: ', command, cmd_output)
         
        # we are creating file which will read our
        # cmd_output and write it in output_file
        return cmd_output
    finally:
        client.close()
 
 
paramiko_GKG('', 'uname')




# # ##3####33#

# from paramiko import SSHClient, AutoAddPolicy


# client = SSHClient()
# #LOAD HOST KEYS
# #client.load_host_keys('~/.ssh/known_hosts')
# client.load_host_keys('C:/Users/amitb/ssh/sshkey')
# client.load_system_host_keys()

# #Known_host policy
# client.set_missing_host_key_policy(AutoAddPolicy())



# client.connect('93.173.65.223', port=80,username='amitb', password=1997)


# # Run a command (execute PHP interpreter)
# #client.exec_command('hostname')
# stdin, stdout, stderr = client.exec_command('hostname')
# print(type(stdin))
# print(type(stdout))
# print(type(stderr))

# # Optionally, send data via STDIN, and shutdown when done
# stdin.write('Hello world')
# stdin.channel.shutdown_write()

# # Print output of command. Will wait for command to finish.
# print(f'STDOUT: {stdout.read().decode("utf8")}')
# print(f'STDERR: {stderr.read().decode("utf8")}')

# # Get return code from command (0 is default for success)
# print(f'Return code: {stdout.channel.recv_exit_status()}')

# # Because they are file objects, they need to be closed
# stdin.close()
# stdout.close()
# stderr.close()

# # Close the client itself
# client.close()






command = "df"




# import subprocess
# import sys

# HOST="93.173.65.223"
# # Ports are handled in ~/.ssh/config since we use OpenSSH
# COMMAND="uname -a"

# ssh = subprocess.Popen(["ssh", "%s" % HOST, COMMAND],
#                        shell=False,
#                        stdout=subprocess.PIPE,
#                        stderr=subprocess.PIPE)
# result = ssh.stdout.readlines()
# if result == []:
#     error = ssh.stderr.readlines()
#     print (sys.stderr, "ERROR: %s" % error)
# else:
#     print (result)



