import {
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TransparentNavbar from "../components/Navbar/TransparentNavbar";
// import CityComponent from "../components/SearchWithDropdown/index";
import { Search } from "@mui/icons-material";
import CityComponent from "../components/SearchWithDropdown";
const HeaderSection = ({ text, bannar, isLogin }) => {
  const styles = {
    isBgImage: {
      height: "85vh",
      width: "100%",
      // backgroundImage: `url(${
      //   user?.image?.startsWith("framekart")
      //     ? `${process.env.REACT_APP_URI}/${user?.image}`
      //     : `${user?.image}`
      // }  )`,
      backgroundImage: `url(${bannar})`,
    },
  };
  return (
    <>
      <Paper
        style={styles.isBgImage}
        sx={{
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(217, 217, 217, 0.51) 0%, rgba(66, 66, 66, 0.48) 0.01%, rgba(0, 0, 0, 0.43) 100%)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRadius: 0,
          }}
        >
          <TransparentNavbar isToken={isLogin} />
          {!isLogin && (
            <Box
              sx={{
                height: "70%",
                width: "100%",

                // background:
                //   "linear-gradient(180deg, rgba(217, 217, 217, 0.51) 0%, rgba(66, 66, 66, 0.48) 0.01%, rgba(0, 0, 0, 0.43) 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                maxWidth="md"
                variant="h3"
                // style={{
                //   font: "800 50px",
                //   WebkitTextFillColor: "rgba(0, 0, 0, 0.80)",
                //   WebkitTextStroke: "1.1px #fff",
                //   fontFamily: "Helvetica",
                //   textTransform: "uppercase",
                //   textAlign: "center",
                // }}
                sx={{ color: "white.main" }}
                style={{
                  maxWidth: "75%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  // lineHeight: "60px",
                  textAlign: "center",
                  fontFamily: "DM Serif Text",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {text}
              </Typography>
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  my: 1,
                }}
              >
                <CityComponent />
                <TextField
                  variant="outlined"
                  placeholder="Search for service"
                  // autoComplete="off"
                  fullWidth
                  type={"text"}
                  sx={{
                    "& .MuiInputBase-root": {
                      // height: 45,

                      // input: { color: "#453F3F" },
                      bgcolor: "white.main",
                      color: "primary.main",
                      fontSize: "0.9rem",
                      outline: "none",
                      border: 0,
                      borderColor: "none",
                      borderRadius: 2,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  // value={userDetails.password}
                  // onChange={(e) =>
                  //   setUserDetails((prev) => ({
                  //     ...prev,
                  //     password: e.target.value,
                  //   }))
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                {[
                  "Exercise bike dfhsgfgh sfgh hdfghdfghfg ",
                  "Chestpress",
                  "tradmill",
                ].map((text) => (
                  <Typography
                    maxWidth="md"
                    variant="body1"
                    sx={{
                      color: "white.main",
                      "&:hover": {
                        color: "third.main",
                        borderBottom: 0.5,
                        borderColor: "third.main",
                      },
                      maxWidth: "175px",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      // lineHeight: "60px",
                      textAlign: "left",
                      cursor: "pointer",
                      borderBottom: 0.5,
                      borderColor: "white.main",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default HeaderSection;
