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
import DevicesIcon from '@mui/icons-material/Devices';


export const mainListItems = (
  <React.Fragment>
    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Scans" />
        </ListItemButton>
    </Link>
    <Link to='/cpm' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton>
        <ListItemIcon>
            <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="CPM Selection" />
        </ListItemButton>
    </Link>
    <Link to='/accounts' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
        </ListItemButton>
    </Link> 
    <Link to='/machines' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton>
        <ListItemIcon>
            <DevicesIcon />
        </ListItemIcon>
        <ListItemText primary="Machines" />
        </ListItemButton>
    </Link> 
    <Link to='/statistics' style={{ textDecoration: 'none', color: 'black' }}>
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