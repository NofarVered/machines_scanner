import React, { Component, useEffect }  from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { ApexChartOsStatistics } from './pieCahrts/pieChartOs';
import { ApexChartPrivilege } from './pieCahrts/pieChartsPrivilege';
import { Statics } from './pieCahrts/staticsCard';


import { getAmountMachines,getAmountOfAccount } from "./pieCahrts/ApiClientPieChart";

export default function StatisticsWrapper() {
    let AmountAccounts
    let AmountScans   
    
    useEffect(()=>{
            
        Promise.all([getAmountOfAccount(), getAmountMachines()]).then((values) => {
            AmountAccounts =values[0][0]["num_of_mac_accounts"]   
            AmountScans =values[1][0]["num_of_linux_accounts"]     
            
            
           
        });
    },[])  


    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ApexChartOsStatistics/>      
                    </Paper>
                </Grid> 
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ApexChartPrivilege/>   
                        <Statics Amount={AmountAccounts} name={"Account Amount"}/>
                        <Statics Amount={AmountScans} name={"scans Amount"} />
                    </Paper>
                   
                         
                    
                </Grid>      
            </Grid>
        </Container>

    )
}