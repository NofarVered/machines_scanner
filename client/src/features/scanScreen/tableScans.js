import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import * as React from 'react';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';



import { Row } from './row';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
// ==============================|| ORDER TABLE - HEADER CELL ||============================== //
const headCells = [
    {
        id: 'ScanName',
        align: 'left',
        disablePadding: false,
        label: 'Scan Name'
    },
    {
        id: 'SuucesDate',
        align: 'left',
        disablePadding: true,
        label: 'success Date'
    },
    {
        id: 'excuteBy',
        align: 'left',
        disablePadding: true,
        label: 'excute By'
    },
    {
        id: 'Status',
        align: 'left',
        disablePadding: false,
        label: 'Status'
    },
    
    {
        id: 'rerun',
        align: 'left',
        disablePadding: false,
        label: 'rerun scan'
    },
    
    {
        id: 'detalis',
        align: 'left',
        disablePadding: false,
        label: 'scan details'
    },
    
];

// ==============================|| ORDER TABLE - HEADER ||============================== //
function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead sx={{
            "& th": {
              color: "white",              
              backgroundColor: "#1976D2"
            }
          }}>
            <TableRow sx={{boxShadow: 4}}>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='center'
                        sx={{width: "450px"}}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};
// ==============================|| ORDER TABLE - STATUS ||============================== //
// ==============================|| ORDER TABLE ||============================== //
export default function OrderTable(props) {
    const [order] = useState('asc');
    const [orderBy] = useState('ScanName');
    const [selected] = useState([]);
   
    const isSelected = (ScanName) => selected.indexOf(ScanName) !== -1;
   
    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(props.scans, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.ScanName);
                            const labelId = `enhanced-table-checkbox-${index}`;
                            return (                                
                                <Row  labelId={labelId} isItemSelected={isItemSelected} row={row} />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}