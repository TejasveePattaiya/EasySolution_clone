import { Box } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
const MobileProductCard = ({data}) => {
  return (
   <>
<Box sx={{width:'100%',height:'30vh',borderRadius:'10px',position:'relative',}}>
<img 
src={require('../assets/images/kg1.png')}
style={{width:'100%',height:'100%',borderRadius:'10px'}}
alt='...'/>
<FavoriteIcon 
sx={{position:'absolute',top:"1rem",right:"1rem",fontSize:25,color:'rgba(108, 108, 108, 1)'}}
/>
   </Box>
   </>
  )
}

export default MobileProductCard