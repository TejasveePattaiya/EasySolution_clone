import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import MobileSearchResCard from "../../examples/MobileSearchResCard";
import { MobileSearchCardData } from "../../Utils/Constant/Services";
export const Searchresult = () => {
  return (
    <>
      <Box sx={{  display:{xs:'flex',sm:'flex',md:'none',xl:'none'}, gap: 1, mt: 2, alignItems: "center" }}>
        <ChevronLeftIcon sx={{ fontSize: 25 }} />
        <TextField
          fullWidth
          type={"text"}
          required
          autoComplete="off"
          variant="outlined"
          sx={{
            "& .MuiInputBase-root": {
              height: 45,

              fontSize: 20,
              fontFamily: "Inter",
              borderRadius: "15px",
              width: 350,
              gap: 2,
              bgcolor: "#ECECEC",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              outline: "none",
              border: "none",
            },
          }}
          InputProps={{
            startAdornment: (
              <inputAdornment position="start">
                <SearchIcon sx={{ fontSize: 15, color: "gray.border" }} />
              </inputAdornment>
            ),
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
        />
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between',p:2}}>
         <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:800}}>Domble</Typography>
         <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:800,color:'red'}}>Sort</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gap:2,p:2}}>
     {MobileSearchCardData && MobileSearchCardData.length>0 && MobileSearchCardData.map((value,index)=>(

      <MobileSearchResCard key={index} data={value}/>
     ))}
     </Box>
    </>
  );
};
