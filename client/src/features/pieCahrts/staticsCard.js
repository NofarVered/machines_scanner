import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import MoneyIcon from '@mui/icons-material/Money';
import { getAmountMachines,getAmountOfAccount } from "./ApiClientPieChart";
import React, { Component, useEffect, useState }  from 'react'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
export function Statics(props){
    const [amountAccount,SetAmountAccount]=useState('')
    const [amountMachines,SetAmountMachines]=useState('')
   
   
    useEffect(()=>{                    
        Promise.all([getAmountOfAccount(), getAmountMachines()]).then((values) => {
            let AmountAccounts =values[0][0]["active_accounts_amount"]   
            let AmountMachines =values[1][0]["Number of machines"]   
            SetAmountAccount(AmountAccounts) 
            SetAmountMachines(AmountMachines)
           
        });
    },[])  
      

return(  <Card
    sx={{ height: '100%',width:500+'px',ml:5,boxShadow:4 }}
    
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {props.name}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.name.includes("Account")? amountMachines: amountAccount }
           
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#1976D2',
              height: 56,
              width: 56
            }}
          >
            <AutoGraphIcon  />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {props.name.includes("Account")?
        <ArrowDownwardIcon color="error" />:
        <ArrowUpward color="success" />}
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
            
          13%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
)}