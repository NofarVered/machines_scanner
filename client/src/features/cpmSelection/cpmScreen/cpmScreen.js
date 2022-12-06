import Grid from '@mui/material/Grid';

import { Container } from '@mui/system';
import ProfileCard from './cpmSelection/cpmScreen/components/ProfileCard';



export  function CpmScreen() {

    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>           
            <ProfileCard/>        
        </Container>
    )
}