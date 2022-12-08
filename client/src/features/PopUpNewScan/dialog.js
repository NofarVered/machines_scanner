import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { NewScan } from "./FormNewScan";
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
    
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



export  function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
       <TableHead sx={{
            "& th": {
              color: "white",              
              backgroundColor: "#0000cd"
            }
          }}>
            <TableRow sx={{boxShadow: 4}}>                
                    <TableCell                       
                        align='center'
                        sx={{width: "550px",fontSize: 'h5.fontSize'}}                       
                         >
                        {"new Scan"}
                   </TableCell>
                
            </TableRow>
        </TableHead>
        <DialogContent sx={{backgroundSize:'cover',backgroundImage: `url(${'https://img.freepik.com/free-vector/geometric-stripe-shape-with-diagonal-halftone-line-background_1409-1934.jpg?w=1380&t=st=1670481845~exp=1670482445~hmac=e256bcbeb4fedf7433aee932e74141e5e666cb3c692915dc4def0536456940a7'})` }} dividers>
            <NewScan handleClose={handleClose}/>
        </DialogContent>
      
      </BootstrapDialog>
    </div>
  );
}