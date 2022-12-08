import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import  { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {CustomizedSnackbars  } from "./snackBar";
import { getCpms } from "../cpmScreen/components/ApiCpm";
import MaterialUIPickers from './dataTimePicker';


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
        'input-label': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            color: 'red'
          },
        
          'input': {
            '&::placeholder': {
              textOverflow: 'ellipsis !important',
              color: 'blue'
            }
          }
      },
    },
  })(TextField);
const theme = createTheme();

export  function NewScan(props) {
  const [scanInputs,setscanInputs]=useState({
        amount:0,        
        vendor:""
  })
  const [cpms,setCpms] =useState([])
  const [cpmChoose,setcpmChoose]=useState('')
  const [color,setColor]=useState('')
  const [open,setOpen]=useState(false)  
  const handleChange=(evt)=>{
    const value = evt.target.value;
    changeStatusInput(value,evt.target.name)        
  }
  const handleCpm=(evt)=>{
    const value = evt.target.value;
    setcpmChoose(value,evt.target.name)   
  }
  const changeStatusInput=(value,name)=>{
     
    setscanInputs({
        ...scanInputs,
        [name]: value
    })
  }
  
  useEffect(()=>{
    getCpms().then((result) => {
          setCpms(result);
      });

  },[])

  
  const handleSubmit = (event) => {
    props.handleClose();
    setOpen(true)
    setColor('success')
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
         
          <Box component="form" noValidate sx={{ mt: 3,width:370 }}>
            <Grid container spacing={2}>
                     
            <Grid container spacing={2}>
            <Grid item xs={12} sx={{mt:2}} >
            <FormControl sx={{width:370,ml:2,mt:2}}  >
                <InputLabel sx={{color:"white"}} id="demo-simple-select-helper-label">Cpms</InputLabel>
                <Select 
                sx={{border: "1px solid white",
                color: "#fff"}}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={cpmChoose}
                label="cpmChoose"
                onChange={handleCpm}
                >
                {cpms.map((c) => (
                    <MenuItem value={c.ip_addresses}>{c.ip_addresses}</MenuItem>
                ))}
                </Select>
            </FormControl>
            </Grid>
            </Grid>
            
              <Grid item xs={12} sx={{mt:2}}>
                <CssTextField
                  sx={{input: { color: 'white' },border:"white", "label": {color: "white"}}    }  
                  required
                  fullWidth
                  name="username"
                  label="username"
                  type="username"
                  id="username"
                  autoComplete="username"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <CssTextField
                  sx={{input: { color: 'white' },border:"white", "label": {color: "white"}}    }  
                  required
                  fullWidth
                  name="password"
                  label="password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12}  >
                    <MaterialUIPickers/>
              </Grid>   
              <Grid item xs={12}  >
            <Button
                sx={{mt:2}}
                variant="contained"
                component="label"
                >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
              </Grid>  
              
            </Grid>            
            <Box textAlign='center' >
                <DialogActions>
                <Button onClick={handleSubmit} sx={{ mt: 4,bgcolor:""}} variant="contained">new Scan</Button>
                 </DialogActions>   
            </Box>
            </Box>
        </Box>
        <CustomizedSnackbars open={open} color={color} messege={"you succed to create transaction"}/>
                    
      </Container>
    </ThemeProvider>
  );
}