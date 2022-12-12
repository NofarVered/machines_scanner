import React, { Component }  from 'react'
import Box from '@mui/material/Box';

export function ReRunComp(props){
    const reRunScan=()=>{
        props.reRunScan(props.id);
    }
    return(
        <Box
        component="img"
        sx={{
        height: 233,
        width: 350,
        maxHeight: { xs:30, md: 30 },
        maxWidth: { xs: 30, md: 30 },
        mt:2,
        cursor:"pointer"
        }}
        onClick={reRunScan}

        alt="The house from the offer."
        src={props.image}
     />
    )
}