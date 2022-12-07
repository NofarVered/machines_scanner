import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';
import {ReRunComp} from './rerunComponent'

import Dot from './dot';


import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';



import EnhancedTable from './historySchema';

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 1:
            color = 'warning';
            title = 'Pending';
            break;
        case 3:
            color = 'success';
            title = 'Done';
            break;
        case 4:
            color = 'error';
            title = 'failed';
            break;
        case 2:
            color = 'primary';
            title = 'Stop';
    }

    return (
        <Stack sx={{ml:10}} direction="row" spacing={1}  alignItems="center">
            <Dot alignItems="center" color={color} />
            <Typography alignItems="center" >{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

export function Row(props){

    const row =props.row;   
    const imageStop = "https://cdn-icons-png.flaticon.com/512/1670/1670326.png"    
    const imageReRun = "https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Replay-512.png"    
      
    const [open, setOpen] = useState(false);
    const labelId=props.labelId
    const isItemSelected=props.isItemSelected
   
    return(                          
            <React.Fragment>
                                
            <TableRow
                hover
                role="checkbox"                
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.ScanName}
                selected={isItemSelected}
            >
                <TableCell component="th" id={labelId} scope="row" align="center">                        
                        {row.ScanName}
                
                </TableCell>
              
                <TableCell align="center">{row.SuucesDate}</TableCell>
                <TableCell align="center">{row.excuteBy}</TableCell>
                <TableCell align="center">
                    <OrderStatus status={row.Status} />
                </TableCell>
                <TableCell  align="center">{row.ScanFile}</TableCell> 

               {row.Status==1? 
                    <ReRunComp image={imageStop}/>
                :
                    <ReRunComp image={imageReRun}/>}
               
                <TableCell align="center">
                    
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                </TableCell>
                
                
                
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <EnhancedTable id={row.id}/>
            </Collapse>
            </TableCell>
            </TableRow>

    </React.Fragment>
    )
}