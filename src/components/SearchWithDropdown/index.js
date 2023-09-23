import React, { useState } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, InputAdornment } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const CityComponent = () => {
  const [isCityName, setIsCityName] = useState("");
  const [data, setData] = useState([]);
  console.log(isCityName, "isCityName");
  const handleChangeToSearch = (event, value) => {
    // setIsCityName(value);
    axios
      .get(`https://server.onlinevedic.com/api/getSearch/${value}`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // Handle error if needed
      });
    axios
      .get(
        ` https://maps.googleapis.com/maps/api/js?key=AIzaSyAatarUnfCi0opdn9JPy6GNuwf0q3r6RBg&libraries=${value}`
      )
      .then((res) => {
        // setData(res.data);
        console.log("map", res.data);
      })
      .catch((err) => {
        // Handle error if needed
      });
  };

  return (
    <Autocomplete
      freeSolo
      options={data}
      getOptionLabel={(option) => option?.Place} // Assuming API returns an array of city names as strings
      onInputChange={handleChangeToSearch}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Type city name"
          variant="outlined"
          value={isCityName}
          onChange={(e) => setIsCityName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
          }}
          sx={{
            width: 200,
            bgcolor: "white.main",
            color: "primary.main",
            borderRadius: 2,
            fontSize: "0.9rem",
            // height: 45,
            "& .MuiAutocomplete-root": {
              // height: 45,
              color: "primary.main",
            },
            "& .MuiAutocomplete-inputRoot ": {
              fontSize: "0.9rem",
              outline: "none",
              border: 0,
              borderColor: "none",
              borderRadius: 2,
              color: "primary.main",
              // height: 45,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              fontSize: "0.9rem",
              outline: "none",
              border: 0,
              borderColor: "none",
              borderRadius: 2,
              color: "primary.main",
              // height: 45,
            },
            "& .MuiAutocomplete-inputRoot ": {
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.9rem",
              outline: "none",
              border: 0,
              borderColor: "none",
            },
            "& .MuiOutlinedInput-input": {
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.9rem",
              outline: "none",
              border: 0,
              borderColor: "none",
            },
            "& .MuiAutocomplete-option": {
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.9rem",
            },
          }}
        />
      )}
    />
  );
};

export default CityComponent;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import parse from "autosuggest-highlight/parse";
// import { debounce } from "@mui/material/utils";

// // This key was created specifically for the demo in mui.com.
// // You need to create a new one for your application.
// const GOOGLE_MAPS_API_KEY = "AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE";

// function loadScript(src, position, id) {
//   if (!position) {
//     return;
//   }

//   const script = document.createElement("script");
//   script.setAttribute("async", "");
//   script.setAttribute("id", id);
//   script.src = src;
//   position.appendChild(script);
// }

// const autocompleteService = { current: null };

// export default function CityComponent() {
//   const [value, setValue] = React.useState(null);
//   const [inputValue, setInputValue] = React.useState("");
//   const [options, setOptions] = React.useState([]);
//   const loaded = React.useRef(false);

//   if (typeof window !== "undefined" && !loaded.current) {
//     if (!document.querySelector("#google-maps")) {
//       loadScript(
//         `https://maps.googleapis.com/maps/api/js?key=AIzaSyAatarUnfCi0opdn9JPy6GNuwf0q3r6RBg&libraries=places`,
//         document.querySelector("head"),
//         "google-maps"
//       );
//     }

//     loaded.current = true;
//   }

//   const fetch = React.useMemo(
//     () =>
//       debounce((request, callback) => {
//         autocompleteService.current.getPlacePredictions(request, callback);
//       }, 400),
//     []
//   );

//   React.useEffect(() => {
//     let active = true;

//     if (!autocompleteService.current && window.google) {
//       autocompleteService.current =
//         new window.google.maps.places.AutocompleteService();
//     }
//     if (!autocompleteService.current) {
//       return undefined;
//     }

//     if (inputValue === "") {
//       setOptions(value ? [value] : []);
//       return undefined;
//     }

//     fetch({ input: inputValue }, (results) => {
//       if (active) {
//         let newOptions = [];

//         if (value) {
//           newOptions = [value];
//         }

//         if (results) {
//           newOptions = [...newOptions, ...results];
//         }

//         setOptions(newOptions);
//       }
//     });

//     return () => {
//       active = false;
//     };
//   }, [value, inputValue, fetch]);

//   return (
//     <Autocomplete
//       id="google-map-demo"
//       sx={{ width: 300 }}
//       getOptionLabel={(option) =>
//         typeof option === "string" ? option : option.description
//       }
//       filterOptions={(x) => x}
//       options={options}
//       autoComplete
//       includeInputInList
//       filterSelectedOptions
//       value={value}
//       noOptionsText="No locations"
//       onChange={(event, newValue) => {
//         setOptions(newValue ? [newValue, ...options] : options);
//         setValue(newValue);
//       }}
//       onInputChange={(event, newInputValue) => {
//         setInputValue(newInputValue);
//       }}
//       renderInput={(params) => (
//         <TextField {...params} label="Add a location" fullWidth />
//       )}
//       renderOption={(props, option) => {
//         const matches =
//           option.structured_formatting.main_text_matched_substrings || [];

//         const parts = parse(
//           option.structured_formatting.main_text,
//           matches.map((match) => [match.offset, match.offset + match.length])
//         );

//         return (
//           <li {...props}>
//             <Grid container alignItems="center">
//               <Grid item sx={{ display: "flex", width: 44 }}>
//                 <LocationOnIcon sx={{ color: "text.secondary" }} />
//               </Grid>
//               <Grid
//                 item
//                 sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
//               >
//                 {parts.map((part, index) => (
//                   <Box
//                     key={index}
//                     component="span"
//                     sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
//                   >
//                     {part.text}
//                   </Box>
//                 ))}
//                 <Typography variant="body2" color="text.secondary">
//                   {option.structured_formatting.secondary_text}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </li>
//         );
//       }}
//     />
//   );
// }
