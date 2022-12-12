import { dialogActionsClasses } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


export default function NotificationsDialog(props) {

    console.log(props.notifications[0].accountName)
    const notifications = props.notifications;
    return(
        <Dialog 
            PaperProps={{ sx: { position: "fixed", top: 70, right: 70, m: 0 } }}
            open={props.open}
        >
            <List sx={{ pt: 0 }}>  
                {notifications.map((notification) => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`The user ${notification.accountName} was added to the machine ${notification.MachineId}`} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> 
        </Dialog>
    )
}