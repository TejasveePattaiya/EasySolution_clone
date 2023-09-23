import { Box, Typography } from "@mui/material";
import React from "react";

const MobileServiceCard = () => {
  return (
    <>
      <Box
        sx={{
          width: "48%",
          height: "28vh",
          border: 1,
          borderColor: "gray.border",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
gap:1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "8rem", height: "8rem", borderRadius: "10px" }}>
          <img
            src={require("../assets/images/blogimg.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="..."
          />
        </Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 16, fontWeight: 600 }}
        >
          Gymnasium
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 16, fontWeight: 600 }}
        >
          Equipment AMC
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600, color: "red" }}
          >
          
            ₹199
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 600, color: "gray.border" }}
          >
            / Visit
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MobileServiceCard;
