import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export  function CustomizedSnackbars(props) {
  
  
  return (        
     <div>
        {props.open?
      <Snackbar open={props.open} autoHideDuration={2000}>
        <Alert severity={props.color} sx={{ width: '100%' }}>
          {props.messege}
        </Alert>
      </Snackbar>
        :null}
      </div>
      
    
  );
}