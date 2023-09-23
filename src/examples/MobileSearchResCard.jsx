import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const MobileSearchResCard = ({data}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "20vh",
          border: 1,
          borderColor: "gray.border",
          borderRadius: 2,
          display: "flex",
          gap:1,
          p:1
        }}
      >
        <Box sx={{ width: "20rem", height: "10rem" }}>
          <img
            src={data?.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="..."
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column",gap:1 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 12, fontWeight: 400, color: "gray.border" }}
          >
            COUGAR
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "red",
              fontSize: 15,
              fontWeight: 800,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Dee Fit PVC Dumbbell Dee Fit PVC Dumbbell Dee Fit PVC Dumbbell...
          </Typography>
          <Box sx={{display:'flex',alignItems:'center'}}>
          <Rating name="customized-1" defaultValue={1} max={1} />
          <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600}}>4.5</Typography>
          <Typography variant="body1" color="initial" sx={{fontSize:16,fontWeight:600,pl:2}}>202 Reviews</Typography>
          </Box>
          <Typography variant="body1" color="initial" sx={{fontSize:14,fontWeight:400}}>Weight : 1KG - 25KG</Typography>
        <Box sx={{display:'flex',gap:1}}>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'gray.border'}}>₹</Typography>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600}}>1200</Typography>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'red'}}>71% Off</Typography>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileSearchResCard;
