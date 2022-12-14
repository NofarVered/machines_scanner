import * as React from 'react';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { changeStatusToRemoved } from './ApiAccounts';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


function useForceUpdate(){
  const [value, setValue] = useState(0); 
  return () => setValue(value => value + 1); 
}

 
function createData(machine_id, operating_system, ip_address, status) {
  return {
    machine_id,
    operating_system,
    ip_address,
    status,
    
  };
} 


const fillRowInfo=(machines_request)=>{
  const new_machines=[]
 
  for(let i=0;i<machines_request.length;i++){
      new_machines.push(createData(machines_request[i].machine_id,machines_request[i].operating_system, machines_request[i].ip_address, machines_request[i].status))
  }
  return new_machines

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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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

const headCells = [
  {
    id: 'machine_id',
    numeric: false,
    disablePadding: true,
    label: 'Machine ID',
  },
  {
    id: 'operating_system',
    numeric: true,
    disablePadding: true,
    label: 'Operating System',
  },
  {
    id: 'ip_address',
    numeric: true,
    disablePadding: false,
    label: 'IP Address',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'status',
  },
  {
    id: 'remove_access',
    numeric: true,
    disablePadding: false,
    label: 'Remove Access',
  }
 
];


function EnhancedTableHead(props) {
  const {  order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

 

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Machines
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};


export default function MachinesByAccount(props) {
  const account = props.account
  const machines = props.machines
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('status');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const removeAccountFromMachine = (account, machine) => {
    console.log(`remove ${account} from ${machine}`)
    changeStatusToRemoved(account, machine)
    .then(
      
      console.log(props)
    )
    .then(
      props.getMachinesByAccount(account)
    )  
  } 


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - machines.length) : 0;


  return(

    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '98%', mb: 2,mt:2,ml:3,align:"center",boxShadow: 6 }}>
        <EnhancedTableToolbar />
        <TableContainer >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
             
              order={order}
              orderBy={orderBy}
            
              onRequestSort={handleRequestSort}
              rowCount={machines.length}
            />
            <TableBody >
              {stableSort(machines, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {              
             
                  return (
                    <TableRow
                      hover

                    > 
                                   
                      <TableCell align="left">{row.machine_id}</TableCell>                       
                      <TableCell align="left">{row.operating_platform}</TableCell>
                      <TableCell align="left">{row.ip_address}</TableCell>
                      <TableCell align="left">{row.enum_status}</TableCell>
                      <TableCell align='left' >
                        <IconButton onClick={()=> removeAccountFromMachine(account, row.machine_id)}>
                          <DeleteOutlineIcon></DeleteOutlineIcon>
                        </IconButton>
                    </TableCell>
                    
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={machines.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </Box>

  )
}