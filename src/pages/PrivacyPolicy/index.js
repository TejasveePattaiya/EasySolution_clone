import React, { useEffect } from "react";

import { Box, Typography } from "@mui/material";

const Index = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/getPrivacyPolicy`).then((result) => {
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
          gap: 4,
          mt: 4,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 25,
            fontWeight: 800,
            // fontFamily: "Inter",
            // letterSpacing: 2,
            fontFamily:'serif'
          }}
        >
          Private Policy
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            width: "70%",
            color: "rgba(114, 114, 114, 1)",
            textAlign: "left",
            letterSpacing: 1,
            lineHeight: "20px",
            pb: 3,
          }}
        >
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policy What is your
          Returns/Exchange policyWhat is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policyWhat
          is your Returns/Exchange policyWhat is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policyWhat is your
          Returns/Exchange policyWhat is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policyWhat is your Returns/Exchange
          policyWhat is your Returns/Exchange policy What is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policyWhat is your Returns/Exchange policyWhat
          is your Returns/Exchange policy What is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policyWhat
          is your Returns/Exchange policy What is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policyWhat is your Returns/Exchange
          policyWhat is your Returns/Exchange policy What is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policyWhat is your Returns/Exchange policyWhat
          is your Returns/Exchange policy What is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policyWhat
          is your Returns/Exchange policyWhat is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policyWhat is your
          Returns/Exchange policyWhat is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policyWhat is your Returns/Exchange
          policyWhat is your Returns/Exchange policy What is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policyWhat is your Returns/Exchange policyWhat
          is your Returns/Exchange policy What is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policy What is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policyWhat
          is your Returns/Exchange policyWhat is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policyWhat is your
          Returns/Exchange policyWhat is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policyWhat is your Returns/Exchange
          policyWhat is your Returns/Exchange policy What is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policyWhat is your Returns/Exchange policyWhat
          is your Returns/Exchange policy What is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policyWhat
          is your Returns/Exchange policyWhat is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policyWhat is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policy What is your
          Returns/Exchange policyWhat is your Returns/Exchange policyWhat is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policyWhat is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policyWhat
          is your Returns/Exchange policyWhat is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policy What is your Returns/Exchange policyWhat is your
          Returns/Exchange policyWhat is your Returns/Exchange policy What is
          your Returns/Exchange policy What is your Returns/Exchange policy What
          is your Returns/Exchange policyWhat is your Returns/Exchange
          policyWhat is your Returns/Exchange policy What is your
          Returns/Exchange policy What is your Returns/Exchange policy What is
          your Returns/Exchange policyWhat is your Returns/Exchange policyWhat
          is your Returns/Exchange policy What is your Returns/Exchange policy
          What is your Returns/Exchange policy What is your Returns/Exchange
          policyWhat is your Returns/Exchange policy
        </Typography>
      </Box>
    </>
  );
};

export default Index;
