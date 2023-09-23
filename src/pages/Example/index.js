import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          height: "100vh",
          borderRadius: 2,
          //   bgcolor:'red'
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box sx={{ width: "20%", height: "25%" }}>
          <img
            src={require("../../assets/image5.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt="..."
          />
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              First name
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Tejasvee"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 300,
                  gap: 2,
                  bgcolor: "#ECECEC",

                  // boxShadow:
                  // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              Last name
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Pattaiya"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 300,
                  gap: 2,
                  bgcolor: "#ECECEC",

                  // boxShadow:
                  // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
             City
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Bhopal"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 300,
                  gap: 2,
                  bgcolor: "#ECECEC",

                  // boxShadow:
                  // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
            Block
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Q batau"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 300,
                  gap: 2,
                  bgcolor: "#ECECEC",

                  // boxShadow:
                  // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
            Area/street,sector,village
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Tejasvee"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width:620,
                  gap: 2,
                  bgcolor: "#ECECEC",

                  // boxShadow:
                  // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </Box>
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
         Landmark
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Tejasvee"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width:620,
                  gap: 2,
                  bgcolor: "#ECECEC",

                  // boxShadow:
                  // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </Box>
          <Button variant="contained" color="primary" sx={{textTransform:'capitalize',mt:1,width:'25%',borderRadius:3}}>
            Submit
          </Button>
      </Box>
    </>
  );
};

export default index;
