
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import OrderTable from './scanScreen/tableScans';
import { CustomizedDialogs } from "./PopUpNewScan/dialog";
import { useState,useEffect } from 'react';
import {getScansRecent} from './scanScreen/ApiScans'
import * as React from 'react';
import {CustomizedSnackbars  } from "./PopUpNewScan/snackBar";


export default function ScansWrapper() {
    const fillRowInfo=(scans)=>{
        const new_scans=[]
        for(let i=0;i<scans.length;i++){
            new_scans.push(createData(scans[i].scan_id,scans[i].scan_name, scans[i].success_date, scans[i].execute_by, scans[i].scan_status, scans[i].scan_file))
        }
        return new_scans
    }
    const handleSnackBar=()=>{
        setOpenSnack(true)
        setColor('success')
    }
    function createData(ScanId,ScanName, SuucesDate, excuteBy, Status, ScanFile) {
        return { ScanId,ScanName, SuucesDate, excuteBy, Status, ScanFile };
    }
   

   
    const [scans,setScans]=useState([])
    const [color,setColor]=React.useState('')
    const [openSnack,setOpenSnack]=React.useState(false) 
    useEffect(() => {
        getScansRecent().then((result)=>{
            setScans(fillRowInfo(result.payload))              
        }).catch((error)=>{
            console.log(error)
        })
      }, []);

    return(
        
        <Container maxWidth="xlg" sx={{ mt: 4, mb: 4 }}>        
        <CustomizedDialogs handleSnackBar={handleSnackBar} />
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                     <OrderTable scans={scans} />
                </Paper>
                <CustomizedSnackbars open={openSnack} color={color} messege={"you succed to create transaction"}/>
      
            </Grid>     
        </Grid>
    </Container>
    )
}