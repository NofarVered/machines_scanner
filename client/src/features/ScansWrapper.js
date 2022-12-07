import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import OrderTable from './scanScreen/tableScans';
import { CustomizedDialogs } from "./PopUpNewScan/dialog";

export default function AccountsWrapper() {


    return(
        <Container maxWidth="lg" sx={{ mt: 4,ml:2, mb: 4 }}>
            <CustomizedDialogs/>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2,width:'120%' }}>
                     <OrderTable/>   
                    </Paper>
                </Grid>     
            </Grid>
        </Container>
    )
}