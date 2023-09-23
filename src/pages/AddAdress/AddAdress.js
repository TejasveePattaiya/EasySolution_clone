import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MobileComponent from "../../components/Mobile/MobileComponent";

const AddAdress = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 2,
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
        <MobileComponent text={"Add address"}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            mt:3,
            justifyContent: "center",
           width:'80%'
          }}
        >
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Enter Your name"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
              
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Enter your mobile no"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
              
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
             
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="City"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
          
                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Block"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
                //   bgcolor: "#ECECEC",

                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Area/street/Village"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width:350,
                gap: 2,
                //   bgcolor: "#ECECEC",

                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Flat no, appartment"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width:350,
                gap: 2,
                //   bgcolor: "#ECECEC",

                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Landmark"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width:350,
                gap: 2,
                //   bgcolor: "#ECECEC",

                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Pincode"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 2,
                borderColor: "gray.border",
                fontSize: 14,
                fontFamily: "Inter",
                borderRadius: "15px",
                width:350,
                gap: 2,
                //   bgcolor: "#ECECEC",

                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <Button variant="contained" color="primary" sx={{width:'50%',borderRadius:10,mt:2,textTransform:'capitalize'}}>
            Save
          </Button>
        </Box>

      </Box>
    </>
  );
};

export default AddAdress;
