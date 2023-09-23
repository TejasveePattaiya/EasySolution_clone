import { Box, Typography } from '@mui/material'
import React from 'react'

const NotiCard = ({data}) => {
  return (
    <>
   <Box sx={{display:'flex',  boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
            width:'100%',height:'10vh',borderRadius:3,bgcolor:data?.color,alignItems:'center',justifyContent:'center',gap:3}}>
<Box sx={{width:'4rem',height:'4rem',borderRadius:10,bgcolor:data?.bgcolor}}>
{/* <img src={require('../assets/images/noti1.png')}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/> */}
</Box>
<Box sx={{display:'flex',flexDirection:'column',}}>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600}}>Payment Successful!</Typography>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:400}}>You have made a services payment</Typography>
</Box>
   </Box>
    </>
  )
}

export default NotiCard