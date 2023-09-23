import { Box, Typography, Button } from '@mui/material';
import React from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MobileAddAddress from '../../examples/MobileAddAddress';
import { MobileAddAddressCard } from '../../Utils/Constant/Services';
import MobileComponent from '../../components/Mobile/MobileComponent';

const AddAddress = () => {
  return (
   <>
<Box sx={{ display:{xs:'flex',sm:'flex',md:'none',xl:'none'},flexDirection:'column',mt:2,gap:2,p:2}}>
<MobileComponent text={"  Change address"}/>
<Button variant="outlined" color="primary" sx={{textTransform:'capitalize'}}>
Add Address
</Button>
{MobileAddAddressCard && MobileAddAddressCard.length>0 && MobileAddAddressCard.map((value,index)=>(

<MobileAddAddress key={index} data={value}/>
))}
</Box>
   </>
  )
}

export default AddAddress;