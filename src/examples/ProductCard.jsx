import { Box, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: "10%",
          height: "15vh",
          border: 1,
          borderColor: "rgba(196, 37, 36, 1)",
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ width: "35%", height: "60%" }}>
          <img
            src={require("../assets/images/main.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              borderRadius: 2,
              color: "red",
            }}
            alt="..."
          />
        </Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 12, fontWeight: 400 }}
        >
          {data?.name}
        </Typography>
      </Box>
    </>
  );
};

export default ProductCard;
