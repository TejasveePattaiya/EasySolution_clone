import React, { useState } from "react";
import HeaderSection from "../../examples/HeaderSection";
import banner from "../../assets/images/banner.png";
import {
  Box,
  Divider,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Rating,
  Checkbox,
} from "@mui/material";
import SimpleImage from "../../examples/SimpleImage";
import {
  simpleImagedata,
  ServiceCardData,
  SpecialOfferData,
  MobileProductCardData,
} from "../../Utils/Constant/Services";

import Choosebutton from "../../examples/Choosebutton";
import SpecialOffer from "../../examples/SpecialOffer";
import { Link } from "react-router-dom";
import MobileProductCard from "../../examples/MobileProductCard";
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../../components/Carousel/SwiperSlider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Services = () => {
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery("(max-width:870px)");

  return isMobile ? (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <ChevronLeftIcon sx={{ fontSize: 25 }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 600, fontFamily: "DM Serif" }}
            >
              Service detail
            </Typography>
          </Box>
          <ShoppingCartIcon />
        </Box>

        <SwiperSlider>
          {MobileProductCardData &&
            MobileProductCardData.length > 0 &&
            MobileProductCardData.map((value, index) => (
              <>
                <SwiperSlide>
                  <MobileProductCard />
                </SwiperSlide>
              </>
            ))}
        </SwiperSlider>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 18, fontWeight: 400, mt: 1, p: 1, mt: 3 }}
        >
          TREADMILL REPAIR SERVICE INSTALLATION & AMC CONTRACT
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Rating name="customized-1" defaultValue={1} max={1} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 600 }}
          >
            4.5
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 600, ml: 4 }}
          >
            202 Reviews
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 25, fontWeight: 600, color: "red" }}
          >
            ₹
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 25, fontWeight: 800, color: "red" }}
          >
            199
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: 25,
              fontWeight: 600,
              color: "rgba(166, 171, 175, 1)",
              ml: 1,
            }}
          >
            / Visit
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }}></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mt: 2,
          //   flexDirection:'column'
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.12)",
            color: "#000",
            borderRadius: 10,
            fontSize: 15,
            textTransform: "capitalize",
            width: "40%",
            height: "5vh",
            "&:hover": {
              bgcolor: "#fff",
            },
          }}
        >
          Discription
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.12)",
            color: "#000",
            borderRadius: 10,
            fontSize: 15,
            textTransform: "capitalize",
            width: "40%",
            height: "5vh",
            "&:hover": {
              bgcolor: "#fff",
            },
          }}
        >
          Service Include
        </Button>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontSize: 18, fontWeight: 500, p: 2 }}
      >
        Motorised Treadmill Repair / Service / Installation <br /> & <br />
        AMC Contract @ Your Door Step
        <br />
        We Repair All Bra nds Motorised Treadmill. We are repairingTreadmill PCB
        & MOTOR, We can Rewind, Recharge and Re-fix the commutator
        <br /> on <br />a DC / AC motor. Our PCB Technicians can diagnose and
        repair any problems in the Treadmill Powerboard. We can Replace/Fix New
        Treadmill PCB / Belts / Drive Belts of any size and also arrange or
        Replacement Treadmill Running Decks.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 400 }}
          >
            Our Minimum Door Step Visting Charge For Inspection is 199/-
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 400 }}
          >
            Service Charge DC Treadmill Rs 499/-
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 400 }}
          >
            For AC Treadmill & Commercial Equipment's Rs - 799/- Per <br />
            Equipment
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 16, fontWeight: 400 }}
        >
          Spare Parts & GST Will Be Extra for all service.
        </Typography>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          fontSize: 16,
          fontWeight: 400,
          p: 2,
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        Call Now to get safe and fastest Treadmill Repair service at your
        Doorstep Book Now.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          p: 3,
        }}
      >
        <Button
          variant="text"
          color="primary"
          sx={{
            border: 2,
            borderColor: "red",
            borderRadius: 10,
            width: "40%",
            height: "5vh",
            color: "#000",
            fontSize: 15,
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          Send Enquery
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "red",
            borderRadius: 10,
            width: "40%",
            height: "5vh",
            textTransform: "capitalize",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </>
  ) : (
    <>
      <HeaderSection bannar={banner} isLogin={true} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: 5,
          gap: 2,
        }}
      >
        {simpleImagedata &&
          simpleImagedata.length > 0 &&
          simpleImagedata.map((value, index) => (
            <SimpleImage
              key={index}
              data={value}
              i={index}
              active={active}
              setActive={setActive}
            />
          ))}
      </Box>
      <Divider sx={{ mt: 4 }}></Divider>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", gap: 8, pb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 25, fontWeight: 800, mt: 3, fontFamily: "Inter" }}
            >
              Choose services
            </Typography>

            {ServiceCardData &&
              ServiceCardData.length > 0 &&
              ServiceCardData.map((value, index) => (
                <Choosebutton key={index} data={value} />
              ))}
          </Box>
          <Divider orientation="vertical" flexItem></Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 800, mt: 3, fontFamily: "Inter" }}
            >
              Special Offer
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {SpecialOfferData &&
                SpecialOfferData.length > 0 &&
                SpecialOfferData.map((data, index) => (
                  <SpecialOffer key={index} value={data} />
                ))}
              <Box
                sx={{
                  width: "30rem",
                  height: "15vh",
                  bgcolor: "white.main",
                  borderRadius: 2,
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 800, fontFamily: "Inter" }}
                >
                  ₹75
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/cart-page"
                  sx={{
                    textTransform: "lowercase",
                    fontFamily: "Inter",
                    width: "20%",
                    height: "35%",
                    fontWeight: 600,
                  }}
                >
                  View cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Services;
