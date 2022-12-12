import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsDialog from './NotificationsDialog';
import { useState } from 'react';
import { getUsers, selectUsers } from './usersSlice'
import { useSelector } from 'react-redux'


export default function Notifications() {

    const [open, setOpen] = useState(false)
    const notifications = useSelector(selectUsers)

    const displayNotifications = () => {
        setOpen(!open)
    }

    return(
        <IconButton color="inherit" onClick={()=> displayNotifications()}>
            <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon />
            </Badge>
            <NotificationsDialog open={open} notifications={notifications}></NotificationsDialog>
        </IconButton> 
    )
}