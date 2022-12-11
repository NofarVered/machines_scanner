import React, { Component, useEffect }  from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { ApexChartOsStatistics } from './pieCahrts/pieChartOs';
import { ApexChartPrivilege } from './pieCahrts/pieChartsPrivilege';
import { Statics } from './pieCahrts/staticsCard';



import { ApexChart } from './pieCahrts/PieChartScansSuccess';

export default function StatisticsWrapper() {
  


    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ApexChartOsStatistics/>      
                    </Paper>
                </Grid> 
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row' }}>
                        <ApexChartPrivilege />   
                        <ApexChart/>
                       
                    </Paper>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row' }}>                       
                        <Statics  name={"Account Amount"}/>
                        <Statics name={"scans Amount"} />
                    </Paper>
                         
                    
                </Grid>      
            </Grid>
        </Container>

    )
}