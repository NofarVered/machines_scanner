import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';
import {getScans} from './ApiScans'

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from "react-number-format"

// project import
import Dot from './dot';

function createData(ScanName, SuucesDate, excuteBy, Status, ScanFile) {
    return { ScanName, SuucesDate, excuteBy, Status, ScanFile };
}

const history= [
    {
      date: '2020-01-05',
      customerId: '11091700',
      amount: 3,
    },
    {
      date: '2020-01-02',
      customerId: 'Anonymous',
      amount: 1,
    },
  ]




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
          id: 'ScanFile',
        align: 'right', 
        disablePadding: false,
        label: 'Scan File'
    },
    {
        id: 'detalis',
        align: 'left',
        disablePadding: false,
        label: 'scan details'
    }
];

const fillRowInfo=(scans)=>{
    for(let i=0;i<scans.length;i++){
        createData(scans[i].scan_name, scans[i].success_date, scans[i].excute_by, scans[i].status, scans[i].scan_file)
    }
}

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
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
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



// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);
    const [open, setOpen] = useState(false);
    const [scans,setScans]=useState([])
    const rows =useState([])


    
    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

    useEffect(() => {
        getScans().then((result)=>{
            setScans(result)
            rows=fillRowInfo(scans)    
        }).catch((error)=>{
            console.log(error)

        })
      }, []); 
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
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.trackingNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <React.Fragment>
                                <TableRow
                                    hover
                                    role="checkbox"
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.trackingNo}
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
                                        <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
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
                                
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                  <Collapse in={open} timeout="auto" unmountOnExit>
                                    <Box sx={{ margin: 1 }}>
                                      <Typography variant="h6" gutterBottom component="div">
                                        History
                                      </Typography>
                                      <Table size="small" aria-label="purchases">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total price ($)</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                              <TableCell component="th" scope="row">
                                                {historyRow.date}
                                              </TableCell>
                                              <TableCell>{historyRow.customerId}</TableCell>
                                              <TableCell align="right">{historyRow.amount}</TableCell>
                                              <TableCell align="right">
                                                {Math.round(historyRow.amount) / 100}
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </Box>
                                  </Collapse>
                                </TableCell>
                              
                              </React.Fragment>
                                
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}