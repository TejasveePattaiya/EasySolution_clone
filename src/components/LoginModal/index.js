import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  IconButton,
  useMediaQuery,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { handleModalOpen } from "../../Redux/LoginSlice";
import PersonIcon from "@mui/icons-material/Person";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function LoginModal({
  // children,
  // show,
  // unShow,
  width,
  height,
  overflowY,
  padding,
  title,
}) {
  const isMobile = useMediaQuery("(max-width:870px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : 600,
    height: height ? height : 600,
    overflowY: overflowY ? "scroll" : "",
    // bgcolor: darkMode ? white.main : dark.main,
    border: "0px solid #000",
    boxShadow: 24,
    borderRadius: 8,
    p: padding ? padding : 4,
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      display: "none",
    },
  };

  const { isOpen } = useSelector((state) => ({
    ...state.isLoginModal,
  }));
  const dispatch = useDispatch();
  console.log(isOpen, "slice");

  const [click, setClick] = React.useState(true);


  const navigate = useNavigate();

  const [isShow, setIsShow] = React.useState({
    // users: "",
    // password: "",
    phoneNumber:"",
  });
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/login/customer`, {
      method: 'POST',
      body: JSON.stringify(isShow),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }
  return (

    <div>
      <Modal
        open={isOpen}
        onClose={() => dispatch(handleModalOpen(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "white.main",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "100%" : width ? width : "auto",
            height: height ? height : "auto",
            borderRadius: 1.5,
            boxShadow: 24,
            // p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              py: 1,
              borderBottom: 0.5,
              borderColor: "secondary.main",
            }}
          >
            <IconButton
              onClick={() => {
                dispatch(handleModalOpen(false));
              }}
              sx={{
                color: "primary.main",
                // position: "fixed",
                // top: 10.5,
                // right: 10.5,
                border: 1,
                borderRadius:1,
                p: 0.5,
                borderColor: "primary.main",
                zIndex: 999,
              }}
            >
              <Close
                sx={{
                  color: "primary.main",
                  fontWeight:800,fontSize:12
                  // color:'#000'
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",

              width: "98%",
              height: "98%",
              overflowY: overflowY ? "scroll" : "",
              // bgcolor: darkMode ? white.main : dark.main,

              p: padding ? padding : 2,
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                width: "0.4em",
                display: "none",
              },
            }}
          >
            <form onSubmit={handlerSubmit}>
            <Box
              sx={{
                display: click ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: 40,
                  fontWeight: 800,
                  fontFamily: "Inter",
                  letterSpacing: "4%",
                }}
              >
                WELCOME
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: 20, fontWeight: 800, fontFamily: "Inter" }}
              >
                Sign In
              </Typography>
            
              <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 400, color: "red" }}
                  
                >
                  Username
                </Typography>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  type={"text"}
                  name="phoneNumber"
                  required
                  autoComplete="off"
                  // variant="outlined"
                  placeholder="Enter your username"
                  // value={isShow.phoneNumber}
                  // onChange={(e) =>
                  //   setIsShow((prev) => ({
                  //     ...prev,
                  //     phoneNumber: e.target.value,
                  //   }))
                  // }
                  onChange={e => setIsShow({...isShow, phoneNumber: e.target.value})}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                      //   border: 2,
                      //   borderColor: "gray",
                      fontSize: 14,
                      fontFamily: "Inter",
                      borderRadius: "15px",
                      width: 400,
                      gap: 1,
                      fontWeight: 600,
                      // bgcolor: "#ECECEC",

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
                        <PersonIcon sx={{ fontSize: 20 }} />
                      </inputAdornment>
                    ),
                    autocomplete: "new-password",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                />
              </Box>
              {/* <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 400, color: "red" }}
                >
                Password
                </Typography>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  type={"text"}
                  required
                  autoComplete="off"
                  placeholder="enter your 4 digit otp"
                  value={isShow.password}
                  onChange={(e) =>
                    setIsShow((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                   
                      fontSize: 14,
                      fontFamily: "Inter",
                      borderRadius: "15px",
                      width: 400,
                      gap: 1,
                      fontWeight: 600,
                     
                    
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      outline: "none",
                      border: "none",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <inputAdornment position="start">
                     
                        <LockRoundedIcon sx={{ fontSize: 20 }} />
                      </inputAdornment>
                    ),
                    autocomplete: "new-password",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                />
              </Box> */}
              <Button
                // onClick={() => setClick(false)}
                variant="contained"
                color="primary"
                sx={{
                  width: "30%",
                  borderRadius: 5,
                  textTransform: "capitalize",
                  mt: 4,
                }}
              >
                Submit
              </Button>
            </Box>
            </form>
            <Box
              sx={{
                display: click ? "none" : "flex",
                // display:'flex',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 30, fontWeight: 800, fontFamily: "Inter" }}
              >
                Verify otp
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 14, fontWeight: 400, fontFamily: "Inter" }}
              >
                Verify your mobile number
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                <TextField
                  fullWidth
                  type={"text"}
                  required
                  autoComplete="off"
                  variant="outlined"
                  // placeholder="1"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                      //   border: 2,
                      //   borderColor: "gray",
                      fontSize: 14,
                      fontFamily: "Inter",
                      borderRadius: "15px",
                      width: 45,
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
                  // InputProps={{
                  //   startAdornment: (
                  //     <inputAdornment position="start">
                  //       {/* <SearchIcon /> */}
                  //       <PersonIcon sx={{ fontSize: 15 }} />
                  //     </inputAdornment>
                  //   ),
                  //   autocomplete: "new-password",
                  //   form: {
                  //     autocomplete: "off",
                  //   },
                  // }}
                />
                <TextField
                  fullWidth
                  type={"text"}
                  required
                  autoComplete="off"
                  variant="outlined"
                  // placeholder="1"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                      //   border: 2,
                      //   borderColor: "gray",
                      fontSize: 14,
                      fontFamily: "Inter",
                      borderRadius: "15px",
                      width: 45,
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
                  // InputProps={{
                  //   startAdornment: (
                  //     <inputAdornment position="start">
                  //       {/* <SearchIcon /> */}
                  //       <PersonIcon sx={{ fontSize: 15 }} />
                  //     </inputAdornment>
                  //   ),
                  //   autocomplete: "new-password",
                  //   form: {
                  //     autocomplete: "off",
                  //   },
                  // }}
                />
                <TextField
                  fullWidth
                  type={"text"}
                  required
                  autoComplete="off"
                  variant="outlined"
                  // placeholder="1"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                      //   border: 2,
                      //   borderColor: "gray",
                      fontSize: 14,
                      fontFamily: "Inter",
                      borderRadius: "15px",
                      width: 45,
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
                  // InputProps={{
                  //   startAdornment: (
                  //     <inputAdornment position="start">
                  //       {/* <SearchIcon /> */}
                  //       <PersonIcon sx={{ fontSize: 15 }} />
                  //     </inputAdornment>
                  //   ),
                  //   autocomplete: "new-password",
                  //   form: {
                  //     autocomplete: "off",
                  //   },
                  // }}
                />
                <TextField
                  fullWidth
                  type={"text"}
                  required
                  autoComplete="off"
                  variant="outlined"
                  // placeholder="1"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                      //   border: 2,
                      //   borderColor: "gray",
                      fontSize: 14,
                      fontFamily: "Inter",
                      borderRadius: "15px",
                      width: 45,
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
                  // InputProps={{
                  //   startAdornment: (
                  //     <inputAdornment position="start">
                  //       {/* <SearchIcon /> */}
                  //       <PersonIcon sx={{ fontSize: 15 }} />
                  //     </inputAdornment>
                  //   ),
                  //   autocomplete: "new-password",
                  //   form: {
                  //     autocomplete: "off",
                  //   },
                  // }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 12, fontWeight: 400, color: "gray.border" }}
                >
                  Resend the OTP in
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 12, fontWeight: 400, color: "gray.border" }}
                >
                  00: 25 sec
                </Typography>
              </Box>
              <Button
                // onClick={() => setClick(true)}
                variant="contained"
                color="primary"
                sx={{
                  width: "40%",
                  borderRadius: 5,
                  textTransform: "capitalize",
                  mt: 4,
                }}
              >
                Verify
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
