import { Box } from '@mui/material'
import React from 'react'
import MobileComponent from '../../components/Mobile/MobileComponent'
import MobileServiceCard from '../../examples/MobileServiceCard'
import { ServiceCardDataa } from '../../Utils/Constant/Services'

const Mobileservice = () => {
  return (
   <>
   <Box sx={{ display:{xs:'flex',sm:'flex',md:'none',xl:'none'},flexDirection:"column",mt:1,p:2}}>
    <MobileComponent text={"Services"}/>
    <Box sx={{display:'flex',flexWrap:'wrap',gap:1,mt:2}}>

  
    {
        ServiceCardDataa && ServiceCardDataa.length>0 && ServiceCardDataa.map((value,index)=>(

<MobileServiceCard key={index} data={value}/>
        ))}
   </Box>
   </Box>

   </>
  )
}

export default Mobileservice