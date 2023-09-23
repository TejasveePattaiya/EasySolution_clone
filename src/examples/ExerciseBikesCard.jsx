import { Box, Card, Typography } from "@mui/material";
import React from "react";

const ExerciseBikesCard = ({ value }) => {
  return (
    <Card
      sx={{
        height: 300,
        width: "30%",
        // bgcolor: value?.colorCode,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        p: 0,
        flexDirection: "column",
        border: 0.5,
        borderColor: "lightgray",
        gap: 2,
      }}
      // component={Link}
      // to="/homepage"
    >
      <Box sx={{ width: "100%", height: 200 }}>
        <img
          src={value?.img}
          alt="img"
          title={value?.title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "scale-down",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          flexDirection: "column",
          width: "95%",
          p: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          fontSize={16}
          fontWeight={600}
        >
          {value?.title}
        </Typography>
        <Typography
          variant="subtitle"
          sx={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          fontSize={12}
        >
          {value?.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default ExerciseBikesCard;
