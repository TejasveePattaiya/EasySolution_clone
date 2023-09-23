import { Box, Typography } from "@mui/material";
import React from "react";

const ContactCard = ({data}) => {
  return (
    <>
      <Box
        sx={{
          width: "`100%",
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap:2,
          border: 1,
          borderColor: "#8B8B8B",
          boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.50)",
          borderRadius:2,
          textAlign:'center',
          flexWrap:'wrap'
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 25, fontWeight: 600, fontFamily: "Inter" }}
        >
         {data?.name}
        </Typography>
        <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:400,fontFamily:'Inter',color:'graydark.main',width:'80%'}}>
          Trendz Enclave, First Floor, Plot No. 44, Survey no 74&75P, Block No.
          1, Lane Opposite Seasons Indoor Swimming Pool, Jai Hind Colony,
          Madhapur - 500081
        </Typography>
      </Box>
    </>
  );
};

export default ContactCard;
