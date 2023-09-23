import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "55vh",
          bgcolor: "rgba(40, 39, 39, 1)",
          display: {xs:'none',sm:'none',md:'flex',xl:'flex'},

          // alignItems: "center",
          p: 4,
          flexDirection: "column",
          // gap:2
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            flexDirection: { xs: "column", sm: "column", md: "row", xl: "row" },
          }}
        >
          <Box
            sx={{
              width: "10%",
              height: "30%",
              border: 2,
              borderColor: "white.main",
              borderRadius: 2,
            }}
          >
            <img
              src={require("../../assets/images/logo1.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              alt="..."
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "yellow.main",
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 300,
              }}
            >
              Quick Links
            </Typography>
            <Link to={"/homepage"} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Home
              </Typography>
            </Link>
            <Link to={"/about-page"} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link to={"/Faq-page"} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Blogs
              </Typography>
            </Link>
            <Link to={"/ContactUs-page"} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Contact Us
              </Typography>
            </Link>
            <Link to={"/homepage"} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Terms & Condition
              </Typography>
            </Link>
            <Link to={"/PrivatePolicy-page"} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "yellow.main",
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 300,
              }}
            >
              Address
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                G 112, Shyam Bihar Colony,
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Near New Bus Stand,
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Indore, Madhya Pradesh,
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "white.main",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                PIN: 452001
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "white.main",
                fontFamily: "Inter",
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              Phone: +91 9770965558
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "white.main",
                fontFamily: "Inter",
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              Email:{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              sx={{
                width: "100%",
                height: "20%",

                borderRadius: 2,
              }}
            >
              <img
                src={require("../../assets/images/google.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  borderRadius: "8px",
                }}
                alt="..."
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "yellow.main", fontSize: 15, fontFamily: "Inter" }}
              >
                Follow Us:
              </Typography>
              <Box sx={{ width: "2rem", height: "60%" }}>
                <img
                  src={require("../../assets/images/facebook.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                  alt="..."
                />
              </Box>
              <Box sx={{ width: "2rem", height: "80%" }}>
                <img
                  src={require("../../assets/images/insta.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                  alt="..."
                />
              </Box>
              <Box sx={{ width: "2rem", height: "80%" }}>
                <img
                  src={require("../../assets/images/twitter.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                  alt="..."
                />
              </Box>
              <Box sx={{ width: "2rem", height: "80%" }}>
                <img
                  src={require("../../assets/images/pinter.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                  alt="..."
                />
              </Box>
              <Box sx={{ width: "2rem", height: "80%" }}>
                <img
                  src={require("../../assets/images/linked.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                  alt="..."
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "white.main",
            fontFamily: "Inter",
          }}
        >
          Copyright © 2023 Easy Solution Services. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
