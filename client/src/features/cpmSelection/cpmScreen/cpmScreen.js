import Grid from '@mui/material/Grid';

import { Container } from '@mui/system';
import ProfileCard from './components/ProfileCard';






export default function CpmScreen(props) {
    const cpms =props.cpm
    const images = props.images
      
    return(    
        <Grid container spacing={2}>
        {cpms.map((cpm)=>{
            <ProfileCard images={images} cpm={cpm}/>     
         })}
          
         </Grid>  
      
    )
}