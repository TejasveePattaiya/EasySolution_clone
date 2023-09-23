import { Box, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect } from "react";
const Ordercard = ({data}) => {
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "28vh",
          border: 1,
          borderColor: "gray.border",
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p:1,
          pr:4
        }}
      >
        <Box sx={{ width: "15%", height: "100%" }}>
          <img
            src={data?.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            alt="..."
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 800, fontFamily: "Inter" }}
          >
            Tap Repair
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
            <CircleIcon sx={{ fontSize: 8, color: "info.main" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 12, fontWeight: 400, color: "info.main" }}
            >
              Service within 30 min
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 8, color: "info.main" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 12, fontWeight: 400, color: "info.main" }}
            >
              7 Year experience Plumber
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 8, color: "info.main" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 12, fontWeight: 400, color: "info.main" }}
            >
              Service within 30 min
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 8, color: "info.main" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 12, fontWeight: 400, color: "info.main" }}
            >
              7 Year experience Plumber
            </Typography>
          </Box>
        </Box>
       
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 30, fontWeight: 600, fontFamily: "Poppins" }}
          >
            ₹75
          </Typography>
       
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 12, fontWeight: 500, color: "info.main" }}
            >
              Services on
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "#28B037", fontSize: 12, fontWeight: 600 }}
            >
              Aug 18 2022
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 12, fontWeight: 500, color: "info.main" }}
          >
            Your work has been served
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 12, fontWeight: 500, color: "info.main" }}
          >
            By : Ashish Gupta
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 12, fontWeight: 500, color: "info.main" }}
          >
            Time : 12:30 PM
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Ordercard;
