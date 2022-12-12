import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsDialog from './NotificationsDialog';
import { useEffect, useState } from 'react';
import { getUsers, selectUsers } from './usersSlice'
import { useSelector } from 'react-redux'
import { getReaddedFromApi } from './apiNotifications';


export default function Notifications() {

    const [open, setOpen] = useState(false)
    const [notifications, setNotifications] = useState([])

    const displayNotifications = () => {
        setOpen(!open)
    }

    useEffect(()=> {
        getReaddedFromApi().then(result=> {
            Array.isArray(result) ? setNotifications(result) : setNotifications([])
        })
    }, [])
    

    return(
        <IconButton color="inherit" onClick={()=> displayNotifications()}>
            <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon />
            </Badge>
            <NotificationsDialog open={open} notifications={notifications}></NotificationsDialog>
        </IconButton> 
    )
}