import * as React from 'react';
import Link from '@mui/material/Link';
import Title from './Title';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from "react-number-format"

import { getAccounts } from './ApiAccounts';


// const accounts = [
//     {
//         'userName': 'matan',
//         'groupName': 'admins',
//         'privileged': 'yes',
//         'password': '1234',
//         'lastPasswordChange': '30-11-2022',
//         'remoteMachine': 'Linux'
//     }
// ]


function preventDefault(event) {
    event.preventDefault();
}


function createData(accountName, scanId, isPrivileged, groupName, passwordAge) {
  return { accountName, scanId, isPrivileged, groupName, passwordAge };
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
      id: 'accountName',
      align: 'left',
      disablePadding: false,
      label: 'Account Name'
  },
  {
      id: 'scanId',
      align: 'left',
      disablePadding: true,
      label: 'Scan ID'
  },
  {
      id: 'isPrivileged',
      align: 'left',
      disablePadding: true,
      label: 'Privileged'
  },
  {
      id: 'groupName',
      align: 'right', 
      disablePadding: false,
      label: 'Group Name'
  },
  {
    id: 'passwordAge',
    align: 'right', 
    disablePadding: false,
    label: 'Password Age'
},
  {
      id: 'detalis',
      align: 'left',
      disablePadding: false,
      label: 'details'
  }
];

const fillRowInfo=(accounts)=>{
  for(let i=0;i<accounts.length;i++){
      createData(accounts[i].account_name, accounts[i].scan_id, accounts[i].is_privilege, accounts[i].group_name, accounts[i].password_age)
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


function Row(props){
  const row =props.row;
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
              key={row.accountName}
              selected={isItemSelected}
          >
              <TableCell component="th" id={labelId} scope="row" align="center">
                      
                      {row.accountName}
              
              </TableCell>
              <TableCell align="center">{row.scanId}</TableCell>
              <TableCell align="center">{row.isPrivileged}</TableCell>
              <TableCell align="center">{row.groupName}</TableCell>
              <TableCell align="center">{row.passwordAge}</TableCell>
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
          <Box sx={{ margin: 1 }}>
          <Typography variant="h6" gutterBottom component="div">
          Machines
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
          {Math.round(historyRow.amount * 100) / 100}
          </TableCell>
          </TableRow>
          ))}
          </TableBody>
          </Table>
          </Box>
          </Collapse>
          </TableCell>
          </TableRow>

  </React.Fragment>
  )
}


export default function Accounts() {

  const [order] = useState('asc');
    const [orderBy] = useState('ScanName');
    const [selected] = useState([]);
    
    const [accounts,setAccounts]=useState([])
    const rows = useState([])


    
    const isSelected = (accountName) => selected.indexOf(accountName) !== -1;

    useEffect(() => {
        getAccounts().then((result)=>{
            setAccounts(result)
     
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
                            const isItemSelected = isSelected(row.accountName);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                
                                <Row labelId={labelId} isItemSelected={isItemSelected} row={row} />
                                
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
    // return (
    //   <React.Fragment>
    //     <Title>Detected Accounts</Title>
    //     <Table size="small">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>User Name</TableCell>
    //           <TableCell>Group Name</TableCell>
    //           <TableCell>Privileged</TableCell>
    //           <TableCell>Password</TableCell>
    //           <TableCell>Last Password Change</TableCell>
    //           <TableCell align="right">Remote Machine</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {accounts.map((account) => (
    //           <TableRow key={account.userName}>
    //             <TableCell>{account.userName}</TableCell>
    //             <TableCell>{account.groupName}</TableCell>
    //             <TableCell>{account.privileged}</TableCell>
    //             <TableCell>{account.password}</TableCell>
    //             <TableCell>{account.lastPasswordChange}</TableCell>
    //             <TableCell align="right">{`${account.remoteMachine}`}</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //     <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
    //       See more accounts
    //     </Link>
    //   </React.Fragment>
    // );
  }