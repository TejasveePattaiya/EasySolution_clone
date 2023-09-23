import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

const MobileCard = () => {
  return (
 <>
 <Box sx={{width:'100%',height:'20vh',border:2,borderColor:'gray.border',borderRadius:2,display:'flex',gap:2,p:2,alignItems:'center'}}>
<Box sx={{width:'60%',height:'90%',border:2,borderColor:'gray.border',borderRadius:2}}>
<img src={require('../assets/images/cart.png')}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/>
</Box>
<Box sx={{display:'flex',flexDirection:'column',gap:1}}>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600}}>Treadmill Repair Service 
Installation & AMC Contract</Typography>
<Box sx={{display:'flex',alignItems:'center'}}>
<Rating name="customized-1" defaultValue={1} max={1} />
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600}}>4.5</Typography>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,pl:2}}>202 Reviews</Typography>
</Box>
<Box sx={{display:'flex',alignItems:'center',gap:1}}>
    <Typography variant="body1" color="initial" sx={{fontSize:25,fontWeight:600,color:'gray.border'}}>₹</Typography>
    <Typography variant="body1" color="initial"  sx={{fontSize:15,fontWeight:800}}>900</Typography>
</Box>
</Box>
 </Box>
 </>
  )
}

export default MobileCard;