import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsDialog from './NotificationsDialog';
import { useState } from 'react';


export default function Notifications() {

    const [open, setOpen] = useState(false)

    const displayNotifications = () => {
        setOpen(!open)
    }

    return(
        <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
            </Badge>
            <NotificationsDialog open={open}></NotificationsDialog>
        </IconButton> 
    )
}