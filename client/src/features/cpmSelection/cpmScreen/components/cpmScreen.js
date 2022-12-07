import Box from '@mui/material/Box';


import ProfileCard from './ProfileCard';

export default function CpmScreen(props) {
    const cpms =props.cpms
    const images = props.images
      
    return(    
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {cpms.map((cpm) => (
                   <ProfileCard images={images} cpm={cpm}/>     
            ))}       
          
         </Box>  
      
    )
}