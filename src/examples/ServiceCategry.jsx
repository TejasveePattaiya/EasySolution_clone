import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCategory = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        height: "12rem",
        width: "18rem",
        bgcolor: value?.colorCode,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        textDecoration: "none",
      }}
      // component={Link}
      // to="/homepage"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          width: "55%",
          height: "100%",
          p: 1,
        }}
      >
        <Typography
          variant="body1"
          fontSize={16}
          fontWeight={600}
          sx={{
            color: "white.main",
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value?.title}
        </Typography>
        <Typography
          variant="subtitle"
          sx={{ color: "white.main" }}
          fontSize={12}
        >
          {value?.description}
        </Typography>
        {/* <Button variant="contained">Book now</Button> */}
        <Button
          onClick={() => navigate("/services-page")}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            bgcolor: value?.bgcolor,
            color: "white.main",
            "&:hover": {
              color: "white.main",
              bgcolor: value?.bgcolor,
            },
          }}
        >
          book now
        </Button>
      </Box>
      <Box sx={{ width: "45%", height: "100%" }}>
        <img
          src={value?.img}
          alt="img"
          title={value?.title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Card>
  );
};

export default ServiceCategory;
