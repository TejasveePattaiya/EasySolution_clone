import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const ProductImage = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box sx={{ width: "8rem", height: "5rem" ,borderRadius:'50%'}}>
            <img
              src={data?.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              alt="..."
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 20,
                fontWeight: 600,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Rachel Green
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 12, fontWeight: 600, color: "gray.border" }}
            >
              01/06/2023
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "10%",
            height: "5vh",
            bgcolor: "rgba(255, 233, 238, 1)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            gap: 0.4,
          }}
        >
          <Rating
            sx={{ fontSize: 15 }}
            name="customized-1"
            defaultValue={0.5}
            max={1}
            precision={0.5}
          />
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 10, fontWeight: 600 }}
          >
            3.2
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontSize: 18, fontWeight: 400, color: "gray.main" }}
      >
        {data?.name}
      </Typography>
    </>
  );
};

export default ProductImage;
