import React from "react";
import Typography from "@mui/material/Typography";
import Ordercard from "../../examples/Ordercard";
import { Box, Container } from "@mui/material";
import { OrderCardData } from "../../Utils/Constant/Services";
import BasicModal from "../../components/Modal";
import { useState } from "react";
import { useEffect } from "react";

const Order = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API}/getOrderByOrderId/648bf84b659e1c817707bf67`).then((result) => {
  //     result.json().then((resp) => {
  //       setData(resp);
  //     });
  //   });
  // }, []);
  // console.log(data);
  return (
    <>
      <Container maxWidth="lg">
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
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pb: 2,
              mt: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 25,
                fontWeight: 600,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              Ordered
            </Typography>
            {OrderCardData &&
              OrderCardData.length > 0 &&
              OrderCardData.map((value, index) => (
                <Ordercard key={index} data={value} />
              ))}
          </Box>
        </Box>
      </Container>
      {/* <BasicModal></BasicModal> */}
    </>
  );
};

export default Order;
