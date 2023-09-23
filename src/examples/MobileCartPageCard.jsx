import { Box, IconButton, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const MobileCartPageCard = ({ data }) => {
  const [counter,setCounter]=useState(0)
  const handleclick1=()=>{
    setCounter(counter+1)
  }
  const handleclick2=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          border: 2,
          borderColor: "gray.border",
          borderRadius: 5,
          width: "100%",
          height: "20vh",
          p: 2,
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "8rem",
              height: "10rem",
              border: 1,
              borderColor: "gray.border",
              borderRadius: 2,
            }}
          >
            <img
              src={require("../assets/images/kg1.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              alt="..."
            />
          </Box>
          <Box
            sx={{
              width: "60%",
              height: "20%",
              bgcolor: "rgba(243, 45, 43, 0.31)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleclick2}
            sx={{ fontSize: 18, fontWeight: 800, color: "#000" }}>
              -
            </IconButton>
            <IconButton sx={{ fontSize: 18, fontWeight: 600, color: "#000" }}>
              {counter}
            </IconButton>
            <IconButton 
            onClick={handleclick1}sx={{ fontSize: 18, fontWeight: 600, color: "#000" }}>
              +
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 400, color: "gray.border" }}
          >
            COUGAR
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "red",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            Dee Fit PVC Dumbbell Dee Fit PVC Dumbbell
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
            >
              Size : 10KG
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, fontWeight: 400 }}
            >
              4.8
            </Typography>
            <Rating name="customized-1" defaultValue={1} max={1} />
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 800 }}
            >
              ₹ 1200
            </Typography>
            {/* <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 15,
                fontWeight: 800,
                color: "gray.border",
                textDecoration: " line-through",
              }}
            >
              ₹ 1500
            </Typography> */}
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 15,
                fontWeight: 800,
                color: "rgba(39, 184, 27, 1)",
              }}
            >
              71% Off
            </Typography>
          </Box>
        </Box>
        <DeleteOutlineOutlinedIcon />
      </Box>
    </>
  );
};

export default MobileCartPageCard;
