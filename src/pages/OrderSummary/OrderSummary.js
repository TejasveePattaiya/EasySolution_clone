import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import MobileComponent from "../../components/Mobile/MobileComponent";

const EnquaryPage = () => {
  return (
    <>
      <Box sx={{  display:{xs:'flex',sm:'flex',md:'none',xl:'none'}, flexDirection: "column", p: 1 }}>
        <MobileComponent text={"Order summery"} />
        <Box
          sx={{ display: "flex", gap: 2, alignItems: "center", mt: 4, p: 2 }}
        >
          <Box
            sx={{
              width: "15rem",
              height: "10rem",
              border: 1,
              borderColor: "gray.border",
              borderRadius: 2,
            }}
          >
            <img
              src={require("../../assets/images/cart.png")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="..."
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              Treadmill Repair Service Installation & AMC Contract
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 25, fontWeight: 600, color: "gray.border" }}
              >
                ₹
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 20, fontWeight: 600 }}
              >
                799
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ border: 1, borderColor: "gray.border", width: "100%", mt: 2 }}
      ></Box>
      <Box
        sx={{
          display:{xs:'flex',sm:'flex',md:'none',xl:'none'},
          flexDirection: "column",
          p: 3,
          gap: 1,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            Price (1 product)
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            ₹799
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            Discount
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            ₹799
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            Delivery Charge
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: 18,
              fontWeight: 600,
              color: "rgba(46, 160, 44, 1)",
            }}
          >
            Free Delivery
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            Coupons Discount
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            ₹799
          </Typography>
        </Box>
        <Box
          sx={{ border: 1, borderColor: "gray.border", width: "100%" }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            Total Amount
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            ₹799
          </Typography>
        </Box>
        <Box
          sx={{ border: 1, borderColor: "gray.border", width: "100%" }}
        ></Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            color: "red",
            fontSize: 15,
            fontWeight: 600,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          You will save ₹39 on this order
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 10,
            width: "50%",
            mt: 10,
            textTransform: "capitalize",
          }}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default EnquaryPage;
