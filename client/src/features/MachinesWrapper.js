import React, { Component }  from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Machines from './machines/Machines';


export default function Machineswrapper() {


    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Machines /> 
                    </Paper>
                </Grid>     
            </Grid>
        </Container>
    )
}