import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import OrderTable from './scanScreen/tableScans';
import { CustomizedDialogs } from "./PopUpNewScan/dialog";
import Dashboard from './Dashboard';

export default function ScansWrapper() {


    return(
        
        <Container maxWidth="xlg" sx={{ mt: 4, mb: 4 }}>
        
        <CustomizedDialogs/>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                     <OrderTable />
                </Paper>
            </Grid>     
        </Grid>
    </Container>
    )
}