import Grid from '@mui/material/Grid';


import ProfileCard from './ProfileCard';

export default function CpmScreen(props) {
    const cpms =props.cpms
    const images = props.images
      
    return(    
        <Grid container spacing={2}>
            {cpms.map((cpm) => (
                   <ProfileCard images={images} cpm={cpm}/>     
            ))}        
          
         </Grid>  
      
    )
}