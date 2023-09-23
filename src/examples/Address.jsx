import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React, { useState } from "react";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { ProceedCardDAta, TimeCard } from "../Utils/Constant/Services";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Address = ({ isOpen, setIsOpen }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [isHover, setIsHover] = useState(true);
  const [click, setClick] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      {isOpen && !click && !isClick && (
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
          <Box
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
            onClick={() => setClick(true)}
          >
            <Box
              sx={{
                width: "3%",
                height: "3vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                bgcolor: "red",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 14, fontWeight: 600, color: "white.main" }}
              >
                +
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 15,
                fontWeight: 600,
                color: "red",
                cursor: "pointer",
              }}
            >
              Add another address
            </Typography>
          </Box>
          <Box
            //   onClick={() => setClick("second")}
            sx={{ display: "flex", cursor: "pointer" }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} />
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 600 }}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 14, fontWeight: 400 }}
              >
                Premnagar, VBU sadar Hazaribagh
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      {/* first card */}
      {isOpen && click && !isClick && (
        <Box
          sx={{
            //   display:isHover?"none":"flex",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            // p:5
          }}
        >
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
                    width: 260,
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
                    width: 260,
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
                    width: 260,
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
                    width: 260,
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
              //   placeholder="Tejasvee"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 550,
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
              Flat, House no., Building, Company, Apartment
            </Typography>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              //   placeholder="Tejasvee"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 550,
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
              //   placeholder="Tejasvee"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  borderRadius: "15px",
                  width: 550,
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
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Checkbox {...label} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
            >
              Make this my default address.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsClick(true);
            }}
            sx={{
              textTransform: "capitalize",
              mt: 1,
              width: "25%",
              borderRadius: 3,
            }}
          >
            Add address
          </Button>
        </Box>
      )}
      {/* Second card */}
      {isOpen && click && isClick && (
        <Box
          sx={{
            display: "flex",
            gap:2,
            flexDirection: "column",
            p:2,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Typography variant="body1" color="initial" sx={{ fontSize: 15,fontWeight:600,color:'gray.border',justifyContent:'flex-start',width:'100%'}}>
            When should you want to take service
          </Typography>
          <Box sx={{display:'flex',gap:1,width:'100%'}}>
{ProceedCardDAta && ProceedCardDAta.length>0 &&
ProceedCardDAta.map((value,index)=>(
    <>
          <Box key={index}
            sx={{
              width: "15%",
              height: "8vh",
              border: 1,
              borderColor: "gray.border",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
            //   justifyContent: "center",
              alignItems: "center",
           
            }}
          >
            <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:400,color:'gray.border'}}>{value?.name}</Typography>
            <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'red'}}>{value?.text}</Typography>
          </Box>
    </>
))}
</Box>
<Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:600,color:'gray.border',mt:3,justifyContent:'flex-start',width:'100%'}}>Select start time for service</Typography>
<Box sx={{display:'flex',gap:2,flexWrap:'wrap',width:'100%'}}>


{TimeCard && TimeCard.length>0 && TimeCard.map((data,index)=>(

<Box key={index}
sx={{    width: "15%",
              height: "6vh",
              border: 1,
              borderColor: "gray.border",
              borderRadius: 2,
              display: "flex",
              alignItems:'center',
              justifyContent:'center'}}>
            <Typography variant="body1" color="initial" sx={{fontSize:12,fontWeight:400,color:'gray.border'}}>{data?.time}</Typography>

</Box>
))}
</Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setClick(false);
              setIsClick(false);
              setIsOpen(false);
            }}
            sx={{textTransform:'capitalize',width:'40%',display:'flex',justifyContent:'center',alignItems:'center'}}
          >
            Proceed to checkout
          </Button>

        </Box>
      )}
    </>
  );
};

export default Address;
