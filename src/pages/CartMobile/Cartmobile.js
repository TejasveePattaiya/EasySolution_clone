import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MobileComponent from "../../components/Mobile/MobileComponent";
import MobileCard from "../../examples/MobileCard";
import { MobileCardData } from "../../Utils/Constant/Services";
import EastIcon from "@mui/icons-material/East";
const Cartmobile = () => {
  return (
    <>
      <Box sx={{ display:{xs:'flex',sm:'flex',md:'none',xl:'none'}, flexDirection: "column", p: 2, gap: 2 }}>
        <MobileComponent text={"Cart"} />
        {MobileCardData &&
          MobileCardData.length > 0 &&
          MobileCardData.map((value, index) => <MobileCard key={index} />)}
        <Button
          variant="outlined"
          color="primary"
          sx={{ textTransform: "capitalize", border: 2, borderColor: "red" }}
        >
          ADD MORE SERVICE
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              gap: 1,
              mt: 3,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 600, fontFamily: "DM Serif" }}
            >
              Payment Summary
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial">
                Item Total
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
                >
                  ₹
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 600 }}
                >
                  1599
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial">
                Tax & Fee
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
                >
                  ₹
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 600 }}
                >
                  1599
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial">
                Visitation Fee
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
                >
                  ₹
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 600 }}
                >
                  1599
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial">
                Membership Discount
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
                >
                  ₹
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 600 }}
                >
                  1599
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ border: 1, borderColor: "gray.border", width: "100%",display:'flex' }}></Box>
      <Box
        sx={{
        display:{xs:'flex',sm:'flex',md:'none',xl:'none'},
          flexDirection: "column",
          p: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 800 }}
          >
            Total
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
            >
              ₹
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              1599
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "10vh",
            bgcolor: "red",
            mt: 4,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, fontWeight: 800, color: "#fff" }}
            >
              Proceed To Checkout
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400, color: "#fff" }}
            >
              All Payment Method Supported
            </Typography>
          </Box>
          <Box sx={{ width: "5rem", height: "3rem" }}>
            <img
              src={require("../../assets/images/image.png")}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              alt="..."
            />
          </Box>
          <EastIcon sx={{ color: "#fff" }} />
        </Box>
        <Button
          variant="text"
          color="primary"
          sx={{
            textTransform: "capitalize",
            mt: 2,
            color: "rgba(151, 71, 255, 1)",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          Or Continue Shoping
        </Button>
      </Box>
    </>
  );
};

export default Cartmobile;
