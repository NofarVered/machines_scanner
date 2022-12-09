import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Accounts from './accounts/Accounts';

export default function AccountsWrapper() {
    return(
        <Container maxWidth="xlg" sx={{ mt: 4, mb: 4 }}>
        
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                     <Accounts />
                </Paper>
            </Grid>     
        </Grid>
    </Container>
    )
}