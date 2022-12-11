import * as React from 'react';
import Link from '@mui/material/Link';
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

import { getMachines, getAccountsByMachine } from './ApiMachines';
import AccountsByMachine from './AccountsByMachine';



function preventDefault(event) {
    event.preventDefault();
}


function createData(machineId, OperatingSystem, ipAddress) {
  return { machineId, OperatingSystem, ipAddress };
}



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
      id: 'machine_id',
      align: 'left',
      disablePadding: false,
      label: 'Machine ID'
  },
  {
      id: 'operating_platform',
      align: 'left',
      disablePadding: true,
      label: 'Operating System'
  },
  {
      id: 'ip_address',
      align: 'left',
      disablePadding: true,
      label: 'IP Address'
  },
  {
      id: 'detalis',
      align: 'left',
      disablePadding: false,
      label: 'details'
  }
];

const fillRowInfo=(machines)=>{
  const new_machines=[]
  for(let i=0;i<machines.length;i++){
      new_machines.push(createData(machines[i].machine_id, machines[i].operating_platform, machines[i].ip_address))
  }
  return new_machines

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
  const [accounts, setAccounts] = useState([])
  const labelId=props.labelId
  const isItemSelected=props.isItemSelected

  const getAccounts = machine => {
    setOpen(!open)
    getAccountsByMachine(machine).then(result=> {
        !Array.isArray(result) ? setAccounts([]) : setAccounts(result)
    })
  } 


  return(                          
          <React.Fragment>
                              
          <TableRow
              hover
              role="checkbox"                
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.machineId}
              selected={isItemSelected}
          >
              <TableCell component="th" id={labelId} scope="row" align="center">
                      
                      {row.machineId}
              
              </TableCell>
              <TableCell align="center">{row.OperatingSystem}</TableCell>
              <TableCell align="center">{row.ipAddress}</TableCell>
              <TableCell align="center">
              <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => getAccounts(row.machineId)}
              >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              </TableCell>
              
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
                <AccountsByMachine accounts={accounts}/>
          </Collapse>
          </TableCell>
          </TableRow>

  </React.Fragment>
  )
}


export default function Machines() {

  const [order] = useState('asc');
    const [orderBy] = useState('ScanName');
    const [selected] = useState([]);
    
    const [machines,setMachines]=useState([])


    
    const isSelected = (machineId) => selected.indexOf(machineId) !== -1;

    useEffect(() => {
        getMachines().then((result)=>{
          setMachines(fillRowInfo(result))
     
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
                        {stableSort(machines, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.machineId);
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
  }