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
import { addScan } from "../scanScreen/ApiScans";

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
  const [file, setFile] = useState();
 
  const [scanInputs,setscanInputs]=useState({
        scanName:"",        
        username:"",
        password:"",
  })

  const handleOnChangeFile = (e) => {
    setFile(e.target.files[0]);
   };
  const [cpms,setCpms] =useState([])
  const [cpmChoose,setcpmChoose]=useState('')
  
  const fileReader = new FileReader();
  
  
  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    return array;
  };
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

  const createScan=(scanName,scanExcuteBy,scanFileIps,cpmIpAdress)=>{
    const newScan = {
        "scan_name":scanName,
        "scan_file":scanFileIps,
        "execute_by":scanExcuteBy,
        "cpm_ip_address":cpmIpAdress
    }
    return newScan
  }
  
  const handleSubmit = (event) => {
    props.handleClose();    
    let array=0
    let Scan
    event.preventDefault();
    
    if (file) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          array = csvFileToArray(text);
          Scan= createScan(scanInputs["scanName"],scanInputs["username"],array,cpmChoose)
          addScan(Scan).then(()=>{        
           
            
        })    
        
        };
        props.handleSnackBar()
        fileReader.readAsText(file);
      
  
    }
   
    
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
                  name="scanName"
                  label="scan Name"
                  type="scanName"
                  id="scanName"
                  autoComplete="scanName"
                  onChange={handleChange}
                />
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
              <Grid item align='center' sx={{mr:1.3}} xs={12}  >
            <Button
                sx={{mt:2,bgcolor:"	#0000cd",borderRadius:6}}
                variant="contained"
                component="label"
                
                >
                Upload File
                <input
                    onChange={handleOnChangeFile}
                    type="file"
                    hidden
                />
            </Button>
              </Grid>  
              
            </Grid>            
            <Box sx={{mt:4,mr:14}} >
                <DialogActions>
                <Button  onClick={handleSubmit} sx={{ mt: 4,p:2,borderRadius:6,pl:4,pr:4,bgcolor:"#0000cd"}} variant="contained">new Scan</Button>
                 </DialogActions>   
            </Box>
            </Box>
        </Box>
                    
      </Container>
    </ThemeProvider>
  );
}