import { Box, Divider, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import MobileComponent from "../../components/Mobile/MobileComponent";
import { PushPin } from "@mui/icons-material";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Time = () => {
  const Marker = ({ text }) => (
    <div className="pin">
      <PushPin size={30} />
      <p className="pin-text">{text}</p>
    </div>
  );

  const location = {
    lat: 23.250199,
    lng: 77.467009,
  };
  const [searchResults, setSearchResults] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  return (
    <>
      <Box sx={{  display:{xs:'flex',sm:'flex',md:'none',xl:'none'}, flexDirection: "column", mt: 2, p: 2 }}>
        <MobileComponent text={"Time Slot"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            mt: 3,
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 16, fontWeight: 600, color: "red" }}
          >
            Please Fill Your detail
          </Typography>
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Time slot"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 1,
                borderColor: "gray.border",
                fontSize: 15,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
                // bgcolor: "#ECECEC",
                color: "gray",
                fontWeight: 600,
                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
            InputProps={{
              startAdornment: (
                <inputAdornment position="start">
                  {/* <SearchIcon /> */}
                  {/* <PersonIcon sx={{ fontSize: 15 }} /> */}
                </inputAdornment>
              ),
              autocomplete: "new-password",
              form: {
                autocomplete: "off",
              },
            }}
          />
          <TextField
            fullWidth
            type={"text"}
            required
            autoComplete="off"
            variant="outlined"
            placeholder="Date"
            sx={{
              "& .MuiInputBase-root": {
                height: 45,
                border: 1,
                borderColor: "gray.border",
                fontSize: 15,
                fontFamily: "Inter",
                borderRadius: "15px",
                width: 350,
                gap: 2,
                // bgcolor: "#ECECEC",
                color: "gray",
                fontWeight: 600,
                // boxShadow:
                // " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
            }}
            InputProps={{
              startAdornment: (
                <inputAdornment position="start">
                  {/* <SearchIcon /> */}
                  {/* <PersonIcon sx={{ fontSize: 15 }} /> */}
                </inputAdornment>
              ),
              autocomplete: "new-password",
              form: {
                autocomplete: "off",
              },
            }}
          />
        </Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 15,
            fontWeight: 600,
            display: "flex",
            justifyContent: "flex-start",
            mt: 2,
          }}
        >
          My Location
        </Typography>
        <Box sx={{ width: "100%", height: "20rem", borderRadius: 10, mt: 2 }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDDOhWEH6qIYmon2vqRrbsOmSdS4w-LoAQ",
            }}
            center={searchItems ? searchItems : location}
            zoom={13}
          >
            <Marker
              lat={searchItems.lat}
              lng={searchItems.lng}
              text={searchResults.Place}
            />
          </GoogleMapReact>
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              mt:3,
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
              gap:1,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              Location Details
            </Typography>
            <Box
              sx={{ border: 1, borderColor: "gray.border", width: "100%" }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                pl: 2,
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Address
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // bgcolor:'red',
                borderRadius:20,
                gap:1,
             
              }}
            >
              <LocationOnIcon sx={{color:'red'}}/>
              <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600}}>251 Parking Street Avenue, New York</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:5}}>
          <Button variant="contained" color="primary" sx={{borderRadius:10,textTransform:'capitalize',width:'50%'}}>
            Submit
          </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Time;
