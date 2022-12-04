import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import CpmSelection from './cpmSelection/CpmSelection';


export default function CpmWrapper() {


    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <CpmSelection />
                    </Paper>
                </Grid>     
            </Grid>
        </Container>
    )
}