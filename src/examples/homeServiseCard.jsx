import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ value }) => {
  const navigate=useNavigate()
  return (
    <Box
      // key={index}
      onClick={() => navigate("/services-page")}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 0.5,
        width: "16%",
        textAlign: "center",
        flexWrap: "wrap",
        mb: 1,
        px: 0.5,
        py: 1,
        cursor: "pointer",
        "&:hover": {
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          //   border: 0.2,
          //   borderColor: "lightgrey",
          borderRadius: 2,
        },
      }}
    >
      <Box
        sx={{
          height: "4rem",
          width: "4rem",
          borderRadius: "50%",
          border: 3,
          borderColor: "#7a7a7a",
        }}
      >
        <img
          src={value.img}
          // src={require("../../assets/images/curved-images/curved14.jpg")}
          alt="..."
          title={value?.title}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value.title || "the shubham"}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
