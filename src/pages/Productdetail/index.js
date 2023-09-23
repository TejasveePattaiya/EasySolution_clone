import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Divider, Rating, Button, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProductCard from "../../examples/ProductCard";
import {
  MobileProductCardData,
  MobileProductKGCard,
  ProductCardData,
  ProductImageData,
} from "../../Utils/Constant/Services";
import SwiperSlider from "../../components/Carousel/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import ProductImage from "../../examples/ProductImage";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MobileProductCard from "../../examples/MobileProductCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MobileComponent from "../../components/Mobile/MobileComponent";
const Productdetail = () => {
  const isMobile = useMediaQuery("(max-width:870px)");
  return isMobile ? (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1, gap: 2 }}>
        <Box
          sx={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
           
          }}
        >
         <MobileComponent text={"Product Detail"}/>
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
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 1 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 18, fontWeight: 800, color: "red" }}
          >
            Dee Fit PVC Dumbbell SetPair Dumbbells, Hex Dumbbells, Home Gym 5KGS
            X 2PCS 10kg Fixed Weight Dumbbell (10 kg)
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="customized-1" defaultValue={1} max={1} />
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 15, fontWeight: 400 }}
              >
                4.5
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              202 Reviews
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                sx={{ fontSize: 18, fontWeight: 600 }}
              >
                1200
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600, color: "red" }}
            >
              71% 0ff
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 15, fontWeight: 600, color: "#247517" }}
          >
            Bank offers 10% OFF
          </Typography>
        </Box>
        <Divider></Divider>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 20, fontWeight: 600, fontFamily: "DM Serif" }}
        >
          Select Size
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, ml: 2 }}>
          {MobileProductKGCard &&
            MobileProductKGCard.length > 0 &&
            MobileProductKGCard.map((value, index) => (
              <Box
                key={index}
                sx={{
                  width: "20%",
                  height: "5vh",
                  border: 2,
                  borderColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 15, fontWeight: 600 }}
                >
                  1KG
                </Typography>
              </Box>
            ))}
        </Box>
        <Divider></Divider>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalShippingIcon />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              Free Delivery{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 20,
                fontWeight: 600,
                color: "gray.border",
                textDecoration: "line-through",
              }}
            >
              ₹40
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              Delivery by 30 July, Friday
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <UTurnLeftIcon />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 600 }}
            >
              10 Days Return Policy
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "2rem", height: "2rem" }}>
                <img
                  src={require("../../assets/images/setting.png")}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="..."
                />
              </Box>

              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 18, fontWeight: 600 }}
              >
                View best available offers
              </Typography>
            </Box>
            <KeyboardArrowRightIcon sx={{ fontSize: 30, fontWeight: 400 }} />
          </Box>
        </Box>
        <Divider></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            gap: 2,
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
                {" "}
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
        <Divider></Divider>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "white.main",
              color: "#000",
              borderRadius: 4,
              width: "40%",
              textTransform: "capitalize",
              height: "5vh",
              "&:hover": {
                bgcolor: "white.main",
              },
            }}
          >
            Description
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "white.main",
              color: "#000",
              borderRadius: 4,
              width: "40%",
              textTransform: "capitalize",
              height: "5vh",
              "&:hover": {
                bgcolor: "white.main",
              },
            }}
          >
            Specification
          </Button>
        </Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 15, fontWeight: 400, color: "gray.border", p: 2 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 15, fontWeight: 400, color: "gray.border", p: 2 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              bgcolor: "white.main",
              color: "#000",
              borderRadius: 5,
              border: 2,
              borderColor: "red",
              width: "40%",
              textTransform: "capitalize",
              height: "5vh",
              "&:hover": {
                bgcolor: "white.main",
              },
            }}
          >
            Add to cart
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "red",
              color: "#fff",
              borderRadius: 5,

              width: "40%",
              textTransform: "capitalize",
              height: "5vh",
              "&:hover": {
                bgcolor: "red",
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
        <Divider></Divider>
      </Box>
    </>
  ) : (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 30, fontWeight: 600, fontFamily: "DM Serif" }}
          >
            Service detail
          </Typography>
          <Divider sx={{ width: "60%" }}></Divider>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 700, fontFamily: "Poppins" }}
            >
              Build Your Body
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 700, fontFamily: "Poppins" }}
            >
              Transform Your Life
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ color: "red" }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, fontWeight: 400 }}
            >
              251 Parking Street Avenue, New York
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="customized-1"
              defaultValue={0.5}
              max={1}
              precision={0.5}
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(121, 121, 121, 1)",
              }}
            >
              4.2 ( 8,234 reviews )
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body1" color="initial">
              price:
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 600, color: "red" }}
            >
              ₹4000
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 14, fontWeight: 400 }}
            >
              (Floor price)
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "rgba(196, 37, 36, 1)",
              borderRadius: 10,
              textTransform: "capitalize",
            }}
          >
            add services
          </Button>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "48vh",
            border: 2,
            borderColor: "gray.border",
            borderRadius: 1,
          }}
        >
          <img
            src={require("../../assets/image5.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
            }}
            alt="..."
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 10, gap: 2 }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 20, fontWeight: 600 }}
        >
          Things to get
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {ProductCardData &&
            ProductCardData.length > 0 &&
            ProductCardData.map((value, index) => (
              <>
                <ProductCard key={index} data={value} />
              </>
            ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 3, gap: 2 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 20, fontWeight: 600 }}
          >
            Photo and Video
          </Typography>
          {/* <SwiperSlider>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
              <SwiperSlide>retfyguhj</SwiperSlide>
            </SwiperSlider> */}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 20, fontWeight: 600 }}
        >
          Review
        </Typography>
        {ProductImageData &&
          ProductImageData.length > 0 &&
          ProductImageData.map((value, index) => (
            <>
              <ProductImage key={index} data={value} />
            </>
          ))}
      </Box>
    </Container>
  );
};

export default Productdetail;
