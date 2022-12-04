import * as React from 'react';
import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ComputerIcon from '@mui/icons-material/Computer';


export const mainListItems = (
  <React.Fragment>
    <Link to='/'>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Scans" />
        </ListItemButton>
    </Link>
    <Link to='/cpm'>
        <ListItemButton>
        <ListItemIcon>
            <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="CPM Selection" />
        </ListItemButton>
    </Link>
    <Link to='/accounts'>
        <ListItemButton>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
        </ListItemButton>
    </Link> 
    <Link to='/statistics'>
        <ListItemButton>
        <ListItemIcon>
            <QueryStatsIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
        </ListItemButton>
    </Link> 
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);