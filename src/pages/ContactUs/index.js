import { Box, Typography, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

import ContactCard from "../../examples/ContactCard";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

// import { Link } from "react-router-dom";


import { ContactCardData } from "../../Utils/Constant/Services";
import { toast } from "react-toastify";
import axios from "axios";

const Index = () => {
// const navigate=useState()
  const [data,setData]=useState({
    fullName:"",
    email:"",
    discription:""
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/createContactUs`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }


  // const handlerSubmit = async (event) => {
  //   event.preventDefault();
  // try {
  //     const resp = await axios.post(
  //       `${process.env.REACT_APP_API}/createContactUs`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
            
  //         },
 
  //   body:JSON.stringify(isShow)
  //       }
  //     );
  //     console.log(resp,"ggggg");
  //     toast.success(resp?.data?.message, {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //     if (resp?.data?.success) {
  //       navigate("/home-page");
  //       localStorage.setItem('token',resp?.data?.token)
  //     }
  //   } catch (error) {
  //     console.log(error,"fgffyy7y7");

  //     toast.error(error?.response?.data?.message, {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  // };
  return (
    <>
      {/* <HomeNav /> */}

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,

            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "40%",
              textAlign: "justify",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 25, fontWeight: 600, fontFamily: "serif" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "gray.main",
                fontFamily: "Inter",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              facilisis porttitor quam eleifend elementum. Praesent suscipit,
              nisl eu pulvinar aliquam, massa augue molestie eros, vel dictum
              mauris purus ornare enim. Pellentesque volutpat posuere lacus ut
              volutpat. Morbi lectus lacus, blandit nec arcu id, aliquam
              porttitor libero. Integer aliquam, orci a dictum
            </Typography>
            <a href={"#contact_us_form"}>
              <Button
                variant="contained"
                color="primary"
                // component={Link}
                // to={"#contact_us_form"}
                sx={{
                  fontSize: 15,
                  fontFamily: "Inter",
                  textTransform: "capitalize",
                  width: "50%",
                }}
              >
                Connect With Me
              </Button>
            </a>
          </Box>
          <Box sx={{ width: "60%", height: "35vh" }}>
            <img
              src={require("../../assets/contactimg.png")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="..."
            />
          </Box>
        </Box>
      </Container>
      <Box sx={{ border: 1, borderColor: "gray.main", mt: 3 }}></Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{ fontSize: 20, fontWeight: 800, fontFamily: "Inter" }}
          >
            You Contact here
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              flexWrap: "wrap",
              mt: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {ContactCardData &&
              ContactCardData.length > 0 &&
              ContactCardData.map((value, index) => (
                <>
                  <Box flexBasis={"30%"}>
                    <ContactCard key={index} data={value} />
                  </Box>
                </>
              ))}
          </Box>
        </Box>
        <Box
          id={"contact_us_form"}
          sx={{
            display: "flex",
            mt: 5,
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            pb: 3,
          }}
        >
          <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              type={"text"}
              name="fullName"
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Search a service"
              // value={isShow.fullName}
              // onChange={(e) =>
              //   setIsShow((prev) => ({
              //     ...prev,
              //     fullName: e.target.value,
              //   }))
              // }
              onChange={e => setData({...data, fullName: e.target.value})}
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  borderRadius: "15px",
                  width: 400,
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
              InputProps={{
                startAdornment: (
                  <inputAdornment position="start">
                    {/* <SearchIcon /> */}
                    <PersonIcon sx={{ fontSize: 15 }} />
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
              type={"email"}
              required
              name="email"
              autoComplete="off"
              variant="outlined"
              placeholder="Search a service"
              // value={isShow.email}
              // onChange={(e) =>
              //   setIsShow((prev) => ({
              //     ...prev,
              //     email: e.target.value,
              //   }))
              // }
              onChange={e => setData({...data, email: e.target.value})}
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,
                  //   border: 2,
                  //   borderColor: "gray",
                  fontSize: 14,
                  fontFamily: "Inter",
                  borderRadius: "15px",
                  width: 400,
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
              InputProps={{
                startAdornment: (
                  <inputAdornment position="start">
                    {/* <SearchIcon /> */}
                    <EmailIcon sx={{ fontSize: 15 }} />
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
              name="discription"
              autoComplete="off"
              variant="outlined"
              placeholder="Write something about your query"
              // value={isShow.discription}
              // onChange={(e) =>
              //   setIsShow((prev) => ({
              //     ...prev,
              //     discription: e.target.value,
              //   }))
              // }
              onChange={e => setData({...data, discription: e.target.value})}
              sx={{
                "& .MuiInputBase-root": {
                  height: "20vh",

                  fontSize: 14,
                  fontFamily: "Inter",
                  borderRadius: "15px",
                  width: 400,
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
                    <EditOutlinedIcon sx={{ fontSize: 15 }} />
                  </inputAdornment>
                ),
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                width: "40%",
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Send
            </Button>
          </Box>
          </form>
          <Box sx={{ width: "40%", height: "60vh" }}>
            <img
              src={require("../../assets/contactimage.png")}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="..."
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Index;
