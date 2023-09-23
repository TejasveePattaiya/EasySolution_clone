import React, { useEffect } from "react";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Index = () => {
const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/getAboutUs`).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
 
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 4,
          pb:5,
          flexDirection:"column",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 25,
            fontWeight: 800,
           
            fontFamily:'serif',
          
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 18,
            fontWeight: 800,
            fontFamily: "Inter",
            letterSpacing: 2,
            mt: 6,
          }}
        >
          Who we are
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "center",
          }}
        >
          
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "center",
          }}
        >
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "center",
          }}
        >
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "center",
          }}
        >
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "center",
          }}
        >
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "justify",
          }}
        >
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "80%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "center",
          }}
        >
          Opebo Company is a technology platform offering a variety of services
          at home. Customers use our platform to book services such as beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting etc. These services are delivered in the
          comfort of their home and at a time of their choosing. We promise our
          customers a high quality, standardised and reliable service
          experience. To fulfill this promise, we work closely with our
          hand-picked service partners, enabling them with technology, training,
          products, tools, financing, insurance and brand, helping them succeed
          and deliver on this promise.
        </Typography>
      </Box>
    </>
  );
};

export default Index;
