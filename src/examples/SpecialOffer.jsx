import {Box, Typography } from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const SpecialOffer = ({ value }) => {
  return (
    <>
      <Box
        sx={{
          width: "30rem",
          height: "18vh",
          backgroundColor: value?.color,

          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          boxShadow: "rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box
          sx={{
            backgroundColor: value?.bgcolor,
            width: "5rem",
            height: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <LocalOfferIcon sx={{ color: "black.main", fontSize: 30 }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 25, fontWeight: 600, fontFamily: "Poppins" }}
          >
            50% off
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: 15,
              fontWeight: 300,
              fontFamily: "Poppins",
              color: "rgba(0, 0, 0, 1)",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Get discount for every order, only vaild for today
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SpecialOffer;
