import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';
import {getScans} from './ApiScans'
import Dot from './dot';
import { DataGrid } from '@mui/x-data-grid';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from "react-number-format"

// project import

import DataTable from './historySchema';
import EnhancedTable from './historySchema';

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack sx={{ml:10}} direction="row" spacing={1}  alignItems="center">
            <Dot alignItems="center" color={color} />
            <Typography alignItems="center" >{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

export function Row(props){

    const row =props.row;
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    const [open, setOpen] = useState(false);
    const labelId=props.labelId
    const isItemSelected=props.isItemSelected
    return(                          
            <React.Fragment>
                                
            <TableRow
                hover
                role="checkbox"                
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.ScanName}
                selected={isItemSelected}
            >
                <TableCell component="th" id={labelId} scope="row" align="center">                        
                        {row.ScanName}
                
                </TableCell>
                <TableCell align="center">{row.excuteBy}</TableCell>
                <TableCell align="center">{row.SuucesDate}</TableCell>
                <TableCell align="center">
                    <OrderStatus status={row.Status} />
                </TableCell>
                <TableCell align="center">
                    <NumberFormat value={row.ScanFile} displayType="text" thousandSeparator prefix="$" />
                </TableCell>
                <TableCell align="center">
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                </TableCell>
                
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <EnhancedTable/>
            </Collapse>
            </TableCell>
            </TableRow>

    </React.Fragment>
    )
}