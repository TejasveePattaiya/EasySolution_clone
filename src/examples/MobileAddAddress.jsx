import { Box, Typography } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CreateIcon from '@mui/icons-material/Create';
const MobileAddAddress = () => {
  return (
   <>
   <Box sx={{width:'100%',height:'10vh',border:1,borderColor:'gray.border',borderRadius:2,display:'flex',gap:1,p:2}}>
   <FormControl>
     
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} />
       
      </RadioGroup>
    </FormControl>
<Box sx={{display:'flex',flexDirection:'column'}}>
<Box sx={{display:'flex'}}>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:400}}>Deliver to :  </Typography>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:800}}>Sanjit kumar, 825301</Typography>
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:400}}>sindhur vinoba nagar, hazaribagh</Typography>
</Box>
< CreateIcon sx={{ml:2}}/>
   </Box>
   </>
  )
}

export default MobileAddAddress