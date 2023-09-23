import { Box, Typography, CardMedia } from "@mui/material";

import React, { useState } from "react";

const SimpleImage = ({ data, i, active, setActive }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        gap: 1,
        width: "8.5rem",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <Box
        onClick={() => setActive(i)}
        sx={{
          width: "100%",
          height: "20vh",
          border: 2.5,
          borderColor: active === i ? "red" : "transparent",
          borderRadius: "10px",
          transitionDuration: "500ms",
          overflow: "hidden",
        }}
      >
        <CardMedia
          title={data?.name}
          image={data?.image}
          sx={{
            objectFit: "cover",
            borderRadius: "10px",
            width: "100%",
            height: "100%",

            "&:hover": {
              transform: "scale(1.1)",
              transitionDuration: "500ms",
            },
          }}
          alt="..."
        />
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          color: "gray",
          fontSize: 15,
          fontWeight: 400,
          p: 0.5,
          fontFamily: "Inter",
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {data?.text}
      </Typography>
    </Box>
  );
};

export default SimpleImage;
