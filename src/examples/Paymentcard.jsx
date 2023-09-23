import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

const Paymentcard = ({data}) => {
  return (
  <>
  <Box sx={{display:'flex',justifyContent:'space-between', boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
            width:'100%',height:'12vh',borderRadius:5,alignItems:'center',p:2}}>
<Box sx={{display:'flex',gap:2,alignItems:'center'}}>
<Box sx={{width:'3rem',height:'3rem',}}>
<img src={data?.image}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/>
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:20,fontWeight:600,color:'gray.border'}}>{data?.name}</Typography>
</Box>
<FormControl>
     
     <RadioGroup
       aria-labelledby="demo-radio-buttons-group-label"
       defaultValue="female"
       name="radio-buttons-group"
     >
       <FormControlLabel value="female" control={<Radio />} />
      
     </RadioGroup>
   </FormControl>
  </Box>
  </>
  )
}

export default Paymentcard