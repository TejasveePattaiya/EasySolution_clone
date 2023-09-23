import { Box } from '@mui/material'
import React from 'react'
import MobileComponent from '../../components/Mobile/MobileComponent'
import NotiCard from '../../examples/NotiCard'
import { NotificationCard } from '../../Utils/Constant/Services'

const Notification = () => {
  return (
  <>
<Box sx={{ display:{xs:'flex',sm:'flex',md:'none',xl:'none'},flexDirection:'column',gap:3,p:2}}>
<MobileComponent text={"Notification"}/>
{NotificationCard && NotificationCard.length>0 && NotificationCard.map((value,index)=>(

<NotiCard key={index} data={value}/>
))}
</Box>
  </>
  )
}

export default Notification