import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Typography, Button, useMediaQuery, Divider } from "@mui/material";
import CardPageCard from "../../examples/CardPageCard";
import {
  CardData,
  MobileCartData,
  SpecialOfferData,
} from "../../Utils/Constant/Services";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import BasicModal from "../../components/Modal";
import SpecialOffer from "../../examples/SpecialOffer";
import Address from "../../examples/Address";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import MobileCartPageCard from "../../examples/MobileCartPageCard";
// import Address from "../../components/Address";
// import Address from "../../components/Address/Address";
const Cart = () => {
  const isMobile = useMediaQuery("(max-width:870px)");
  const [isOpen, setIsOpen] = useState(false);
  return isMobile ? (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1, gap: 2 }}>
        <Box sx={{ display: "flex" }}>
          <ChevronLeftIcon sx={{ fontSize: 25 }} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 16, fontWeight: 400, fontFamily: "DM Serif" }}
          >
            Cart
          </Typography>
        </Box>
        {MobileCartData &&
          MobileCartData.length > 0 &&
          MobileCartData.map((value, index) => (
            <MobileCartPageCard key={index} data={value} />
          ))}
        <Button
          variant="outlined"
          color="primary"
          sx={{ color: "red", border: 1, borderColor: "red" }}
        >
          ADD MORE ITEMS
        </Button>
        <Box
          sx={{
            width: "100%",
            height: "30vh",
            border: 1,
            borderColor: "gray.border",
            borderRadius: 2,
            gap: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 600, p: 2 }}
          >
            Price Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              pl: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              Price (3 product)
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              ₹3600
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              pl: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              Discount
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              ₹975
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              pl: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              Delivery Charge
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 15,
                fontWeight: 800,
                color: "rgba(46, 160, 44, 1)",
              }}
            >
              Free Delivery
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              pl: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              Coupons Discount
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              ₹25
            </Typography>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              pl: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 800 }}
            >
              Total Amount
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 800 }}
            >
              ₹2600
            </Typography>
          </Box>
          <Divider></Divider>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 600, color: "red", pl: 2 }}
          >
            You will save ₹1240 on this order
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            gap: 2,
            border: 1,
            borderColor: "gray.border",
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 600, color: "gray.border" }}
              >
                Delivery to :
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 600 }}
              >
                Pawan kumar, 825301
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 15,
                fontWeight: 600,
                color: "gray.border",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Bjp Building, premnagar near shiv Bjp Building, premnagar near
              shiv...
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "white.main",
              color: "#000",
              borderRadius: 10,
              width: "40%",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "white.main",
              },
            }}
          >
            change
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "10vh",
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-evenly",
            boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
            alignItems:'center'
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column",alignItems:'center' }}>
            <Typography variant="body1" color="initial" sx={{fontSize:15,fontWeight:800}}>
              ₹2600
            </Typography>
            <Button variant="text" color="primary" sx={{textTransform:'capitalize',color:'rgba(46, 106, 160, 1)'}}>
              View price detail
            </Button>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 10, width: "40%", height: "50%",textTransform:'capitalize'}}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            // alignItems: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "50%",
              height: "auto",
              border: 1,
              borderColor: "#D1D1D1",
              borderRadius: 2,
              p: 4,
              
              overflowY: "scroll",
              height: {
                xs: "100%",
                md: "calc(100vh - 30px)",
                xl: "calc(100vh - 30px)",
              },
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 600 }}
            >
              Added services
            </Typography>
            {CardData &&
              CardData.length > 0 &&
              CardData.map((data, index) => (
                <CardPageCard key={index} value={data} />
              ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
              width: "40%",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 600 }}
            >
              Order Summary
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
                mt: 4,
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400, fontFamily: "Inter" }}
              >
                Total price
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400, fontFamily: "Inter" }}
              >
                ₹300
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400, fontFamily: "Inter" }}
              >
                Taxes and Fee
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400, fontFamily: "Inter" }}
              >
                ₹20
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400, fontFamily: "Inter" }}
              >
                Visitation Fee
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400, fontFamily: "Inter" }}
              >
                ₹20
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 3,
                width: "80%",
                alignItems: "center",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ width: "15%", height: "5vh" }}>
                  <img
                    src={require("../../assets/persent.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                    alt="..."
                  />
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 600 }}
                >
                  Coupon and Offer
                </Typography>
              </Box>
              <ArrowBackIosIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                width: "80%",
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 18, fontWeight: 400, color: "red" }}
              >
                Discount
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "red" }}
                >
                  ₹30
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "red" }}
                >
                  10% Off
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: 1,
                borderColor: "gray.border",
                mt: 2,
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                width: "65%",
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 18, fontWeight: 600 }}
              >
                Total
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 18, fontWeight: 600 }}
              >
                ₹300
              </Typography>
            </Box>
            <Box
              sx={{
                border: 1,
                borderColor: "gray.border",
                mt: 2,
                width: "100%",
              }}
            ></Box>

            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "capitalize", mt: 2 }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Add Address
            </Button>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}
            >
              {SpecialOfferData &&
                SpecialOfferData.length > 0 &&
                SpecialOfferData.map((data, index) => (
                  <SpecialOffer key={index} value={data} />
                ))}
            </Box>
          </Box>
        </Box>
      </Container>
      <BasicModal
        show={isOpen}
        unShow={setIsOpen}
        overflowY={true}
        height={"90%"}
        title={"Added address"}
      >
        <Address isOpen={isOpen} setIsOpen={setIsOpen} />
      </BasicModal>
    </>
  );
};

export default Cart;
