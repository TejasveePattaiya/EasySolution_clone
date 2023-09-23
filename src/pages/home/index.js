import React from "react";

import HeaderSection from "../../examples/HeaderSection";
import banner from "../../assets/images/banner.png";
import {
  ExerciseBikes,
  MobileHomeCardData,
  ServicecardData,
  moreServicesInHome,
} from "../../Utils/Constant/Services";
import ServiceCard from "../../examples/homeServiseCard";
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ServiceCategory from "../../examples/ServiceCategry";
import ExerciseBikesCard from "../../examples/ExerciseBikesCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MobileHomeCard from "../../examples/MobileHomeCard";
import { Carousel } from "react-responsive-carousel";
import SwiperSlider from "../../components/Carousel/SwiperSlider";
import { SwiperSlide } from "swiper/react";
const Home = () => {
  // const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:870px)");
  return isMobile ? (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1, gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box sx={{ width: "6rem", height: "6rem", borderRadius: "50%" }}>
              <img
                src={require("../../assets/image5.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                alt="..."
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 25, fontWeight: 600 }}
              >
                Good Morning
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon sx={{ color: "rgba(236, 47, 7, 1)" }} />
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: 18, fontWeight: 400, color: "gray.border" }}
                >
                  Bhopal 458001
                </Typography>
              </Box>
            </Box>
          </Box>
          <Link to={'/notification-page'}>
         
          <NotificationsNoneIcon  sx={{ fontSize: 30 }} />
          </Link>
        </Box>
        <TextField
          fullWidth
          type={"text"}
          required
          autoComplete="off"
          variant="outlined"
          placeholder="Search "
          sx={{
            "& .MuiInputBase-root": {
              height: 45,

              fontSize: 14,
              fontFamily: "Inter",
              borderRadius: "15px",
              width: 400,
              gap: 2,
              bgcolor: "rgba(245, 245, 245, 0.99)",
              display: "flex",
              alignItems: "center",
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
                <SearchIcon sx={{ fontSize: 18 }} />
              </inputAdornment>
            ),
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
        />

       <SwiperSlider 
        //  navigation={false}
       >
        
            {MobileHomeCardData &&
              MobileHomeCardData.length > 0 &&
              MobileHomeCardData.map((value, index) => (
                <>
                <SwiperSlide>
            <MobileHomeCard key={index} data={value} />
                </SwiperSlide>
                </>
              ))}
        
          </SwiperSlider>
<Typography variant="body1" color="initial" sx={{fontSize:18,fontWeight:600,fontFamily:'DM Serif ',letterSpacing:'1%',ml:2}}>Service</Typography>
          <Box sx={{display:'flex',flexWrap:'wrap',gap:3,justifyContent:'center',alignItems:'center'}}>
          {ServicecardData &&
            ServicecardData.length > 0 &&
            ServicecardData.map((value, index) => (
              <ServiceCard key={index} value={value} />
            ))}
          </Box>
          <Typography variant="body1" color="initial"  sx={{fontSize:18,fontWeight:600,fontFamily:'DM Serif ',letterSpacing:'1%',ml:2}}>More Services</Typography>
          <SwiperSlider>
          {moreServicesInHome &&
            moreServicesInHome.length > 0 &&
            moreServicesInHome.map((data, index) => (
              <>
              <SwiperSlide>
              <ServiceCategory value={data} key={index} />
              </SwiperSlide>
              </>
            ))}
            </SwiperSlider>
          </Box>

    </>
  ) : (
    <Box
      sx={{
        mb: 2,
      }}
    >
      <HeaderSection
        text={"Lorem ipsum dolor sit, "}
        bannar={banner}
        isLogin={false}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: -12.5,
        }}
      >
        <Box
          width="70%"
          sx={{
            minHeight: "20rem",
            border: 1,
            borderRadius: 1,
            borderColor: "#d3d3d3",
            background: "#FFF",
            boxShadow: "0px 4px 61px 0px rgba(0, 0, 0, 0.18)",
            p: 3.5,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.5%",
          }}
        >
          {ServicecardData &&
            ServicecardData.length > 0 &&
            ServicecardData.map((value, index) => (
              <ServiceCard key={index} value={value} />
            ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          px: 10,
          py: 2,
          borderTop: 0.5,
          // borderBottom: 0.5,
          borderColor: "lightgray",
          mt: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            my: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 3,
            py: 2,
          }}
        >
          {moreServicesInHome &&
            moreServicesInHome.length > 0 &&
            moreServicesInHome.map((data, index) => (
              <ServiceCategory value={data} key={index} />
            ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          px: 10,
          py: 2,
          borderTop: 0.5,

          borderColor: "lightgray",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h4"
            color="secondary.main"
            textAlign={"center"}
            fontWeight={600}
          >
            Exercise Bike
          </Typography>
          <Typography
            variant="h6"
            color="secondary.main"
            textAlign={"center"}
            fontWeight={400}
          >
            Servicing, Repair, Installation & Uninstallation
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            my: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 3,
            py: 2,
          }}
        >
          {ExerciseBikes &&
            ExerciseBikes.length > 0 &&
            ExerciseBikes?.slice(0, 3)?.map((value, index) => (
              <ExerciseBikesCard value={value} key={index} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
