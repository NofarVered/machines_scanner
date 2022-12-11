import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


export default function NotificationsDialog(props) {
    


    return(
        <Dialog open={props.open}>
            <List sx={{ pt: 0 }}>
                <ListItem>

                </ListItem>
            </List> 
        </Dialog>
    )
}