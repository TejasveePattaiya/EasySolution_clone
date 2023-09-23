import { Box, Typography } from '@mui/material'
import React from 'react'

const MobileHomeCard = ({data}) => {
  return (
   <>
   <Box sx={{width:'100%',height:'25vh',borderRadius:3,bgcolor:'#6C92E0',display:'flex',justifyContent:'space-between',alignItems:'center',p:2,gap:1}}>
<Box sx={{display:'flex',flexDirection:'column',gap:1}}>
<Typography variant="body1" color="initial" sx={{fontSize:20,fontWeight:800,color:'white.main'}}>Weight Lifting Bar Repair & service </Typography>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:800,color:'white.main'}}>“Gym equipment repair at 
your home!”</Typography>
</Box>
<Box sx={{width:'20rem',height:'12rem'}}>
    <img src={require('../assets/image4.png')}
    style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'10px'}}
    alt='...'/>
</Box>
   </Box>
   </>
  )
}

export default MobileHomeCard