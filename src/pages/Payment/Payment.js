import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MobileComponent from "../../components/Mobile/MobileComponent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Paymentcard from "../../examples/Paymentcard";
import { PaymentCardData } from "../../Utils/Constant/Services";
const Payment = () => {
const [click,setClick]=useState(true)
  return (
    <>
      <Box sx={{ display:{xs:'flex',sm:'flex',md:'none',xl:'none'}, flexDirection: "column", gap: 2, p: 2 }}>
        <MobileComponent text={"Payment"} />
        <Box
          sx={{
            width: "100%",
            height: "8vh",
            border: 2,
            borderColor: "red",
            borderRadius: 2,
            display: "flex",
            alignItems:'center',
            p:2,gap:3
          }}
        >
            <Typography variant="body1" color="initial" sx={{fontSize:20,fontWeight:600,color:'gray.border'}}>3 product ,  ₹2600.00</Typography>
            <Button 
            onClick={()=>setClick(false)}
            variant="text" color="primary" endIcon={<ChevronLeftIcon sx={{color:'red',fontSize:18}}/>} sx={{textTransform:'capitalize',fontSize:18}}>
              View All
            </Button>
        </Box>
        <Box sx={{display:click?"flex":"none",flexDirection:'column',gap:3}}>

     
        {PaymentCardData && PaymentCardData.length>0 && PaymentCardData.map((value,index)=>(

        <Paymentcard key={index} data={value}/>
        ))}
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<Typography variant="body1" color="initial" sx={{fontSize:20,fontWeight:400,color:'red'}}>NET Banking</Typography>
<Typography variant="body1" color="initial" sx={{fontSize:18,fontWeight:600,color:'red'}}>More Bank</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between', boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
            width:'100%',height:'15vh',borderRadius:5,alignItems:'center',p:2}}>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Box sx={{width:'4rem',height:'3rem',}}>
<img src={require('../../assets/images/Axis.png')}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/>
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'gray.border'}}>Axis Bank</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Box sx={{width:'3rem',height:'3rem',}}>
<img src={require('../../assets/images/sbi.png')}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/>
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'gray.border'}}>SBI Bank</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Box sx={{width:'4rem',height:'3rem',}}>
<img src={require('../../assets/images/Axis.png')}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/>
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'gray.border'}}>Axis Bank</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Box sx={{width:'4rem',height:'3rem',}}>
<img src={require('../../assets/images/Axis.png')}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt='...'/>
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'gray.border'}}>Axis Bank</Typography>
                </Box>
                </Box>
                </Box>
                <Box sx={{display:click?"none":"flex",justifyContent:'center',alignItems:'center',gap:1,mt:3}}>
                  <Box sx={{display:'flex',flexDirection:'column',gap:1,alignItems:'center'}}>
<Box sx={{width:'12rem',height:'10rem',border:1,borderColor:'gray.border',borderRadius:2}}>
<img src={require("../../assets/images/case.png")}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt="..."/>
</Box>
<Typography variant="body1" color="initial">Cash On Delivery</Typography>
                  </Box>
                  <Box sx={{display:'flex',flexDirection:'column',gap:1,alignItems:'center'}}>
<Box sx={{width:'12rem',height:'10rem',border:1,borderColor:'gray.border',borderRadius:2}}>
<img src={require("../../assets/images/online.png")}
style={{width:'100%',height:'100%',objectFit:'cover'}}
alt="..."/>
</Box>
<Typography variant="body1" color="initial">Online Payment</Typography>
                  </Box>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:2}}>
                  <Button  onClick={()=>setClick(true)}
                  variant="contained" color="primary" sx={{width:'40%',borderRadius:10,textTransform:'capitalize'}}>
                    Continue
                  </Button>
                  </Box>
      </Box>
    </>
  );
};

export default Payment;
