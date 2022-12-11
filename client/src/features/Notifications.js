import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function Notifications() {


    return(
        <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
            </Badge>
      </IconButton> 
    )
}