import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider, Rating, Button, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
const Choosebutton = ({ data }) => {
  const [show, setShow] = useState(true);
  const [isShow, setIsShow] = useState(true);
  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "35rem",
          height: "auto",
          borderRadius: " 10px",

          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
          display: "flex",
          // justifyContent:'space-between',
          alignItems: "center",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "80rem" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 800, fontFamily: "Inter" }}
          >
            Tap Repair
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Rating name="customized-1" max={1} size="small" />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "#4B4B4B",
                fontFamily: "Inter",
              }}
            >
              4.5(16k review)
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 20, fontWeight: 800, fontFamily: "Inter" }}
          >
            ₹75
          </Typography>
          <Divider></Divider>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 10, color: "gray" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "gray",
                fontFamily: "Inter",
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 10, color: "gray" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "gray",
                fontFamily: "Inter",
              }}
            >
              Sed pharetra eroc ax cu vehicle
            </Typography>
          </Box>
          <Box
            sx={{ display: show ? "none" : "flex", flexDirection: "column" }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <CircleIcon sx={{ fontSize: 10, color: "gray" }} />
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "gray",
                  fontFamily: "Inter",
                }}
              >
                Sed pharetra eroc ax cu vehicle
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <CircleIcon sx={{ fontSize: 10, color: "gray" }} />
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "gray",
                  fontFamily: "Inter",
                }}
              >
                Sed pharetra eroc ax cu vehicle
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <CircleIcon sx={{ fontSize: 10, color: "gray" }} />
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "gray",
                  fontFamily: "Inter",
                }}
              >
                Sed pharetra eroc ax cu vehicle
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={() => setShow(!show)}
            variant="text"
            color="primary"
            sx={{
              textTransform: "capitalize",
              width: "25%",
              height: "20%",
              fontFamily: "Inter",
            }}
          >
            View Detail
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ width: "80%", height: "80%" }}>
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
          <Box
            onClick={() => setIsShow(false)}
            sx={{
              display: "flex",
              gap: 1,
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
              width: "50%",
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

export default Choosebutton;
