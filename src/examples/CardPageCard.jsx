import { Box, Typography, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

const CardPageCard = ({ value }) => {
  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    if(counter>0){
    setCounter(counter - 1);
    }
  };
  const [isShow,setIsShow]=useState(true)
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "28vh",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: 2,
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 800 }}
          >
            Tap repair
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 800, color: "rgba(75, 75, 75, 1)" }}
          >
            ₹75
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
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "15%",
              height: "20%",
              bgcolor: "white.main",
              fontSize: 10,
              color: "black.main",
              textTransform: "capitalize",
              fontWeight: 600,
              borderRadius: 2,
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
              mt: 1,
              "&:hover": {
                bgcolor: "white.main",
              },
            }}
          >
            Remove
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "25%" }}>
          <Box sx={{ width: "100%", height: "20vh" }}>
            <img
              src={value?.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              alt="..."
            />
          </Box>
          <Box
            onClick={() => setIsShow(false)}
            sx={{
              display: "flex",
              // gap: 1,
              borderRadius: " 10px",
              border: "1px solid #DCDCDC",

              boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "white.main",

              m: -2,
              ml: 3,
              // fontSize: 15,
              // textTransform: "capitalize",
              // fontWeight: 600,
              width: "60%",
              height: "5vh",
            }}
          >
            <Box
              sx={{
                // width: "50%",
                // height: "5vh",

                display: isShow ? "flex" : "none",
                // gap: 1,
                // borderRadius: " 10px",
                // border: "1px solid #DCDCDC",

                // boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
                // alignItems: "center",
                // justifyContent: "center",
                // bgcolor: "white.main",

                // m: -2,
                // ml: 3,
                fontSize: 15,
                textTransform: "capitalize",
                fontWeight: 600,
                color: "red",
                // "&:hover": {
                //   bgcolor: "white.main",
                // },
              }}
            >
              Add
            </Box>
            <Box sx={{ display: isShow ? "none" : "flex" }}>
              <IconButton
                onClick={handleClick1}
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "red",
                  cursor: "pointer",
                }}
              >
                +
              </IconButton>
              <IconButton
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "red",
                  cursor: "pointer",
                }}
              >
                {counter}
              </IconButton>
              <IconButton
                onClick={handleClick2}
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "red",
                  cursor: "pointer",
                }}
              >
                -
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardPageCard;
