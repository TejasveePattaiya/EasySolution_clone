import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Index = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/getAllFAQ`).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,

            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "40%",
              textAlign: "justify",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 25, fontWeight: 600, fontFamily: "serif" }}
            >
              FAQ
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "gray.main",
                fontFamily: "Inter",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              facilisis porttitor quam eleifend elementum. Praesent suscipit,
              nisl eu pulvinar aliquam, massa augue molestie eros, vel dictum
              mauris purus ornare enim. Pellentesque volutpat posuere lacus ut
              volutpat. Morbi lectus lacus, blandit nec arcu id, aliquam
              porttitor libero. Integer aliquam, orci a dictum
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: 15,
                fontFamily: "Inter",
                textTransform: "capitalize",
                width: "30%",
              }}
            >
              Connect Us
            </Button>
          </Box>
          <Box sx={{ width: "60%", height: "35vh" }}>
            <img
              src={require("../../assets/contactimg.png")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="..."
            />
          </Box>
        </Box>
      </Container>
      <Box sx={{ border: 1, borderColor: "gray.main", mt: 3 }}></Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 3,
            pb: 3,
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 30, fontWeight: 600 }}
          >
            Frequently Asked Question
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 5,
              //   width: "80%",
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  facilisis porttitor quam eleifend elementum. Praesent
                  suscipit, nisl eu pulvinar aliquam, massa augue molestie eros,
                  vel dictum mauris purus ornare enim. Pellentesque volutpat
                  posuere lacus ut volutpat. Morbi lectus lacus, blandit nec
                  arcu id, aliquam porttitor libero. Integer aliquam, orci a
                  dictum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Proin facilisis porttitor quam eleifend elementum.
                  Praesent suscipit, nisl eu pulvinar aliquam, massa augue
                  molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin facilisis porttitor quam eleifend
                  elementum. Praesent suscipit, nisl eu pulvinar aliquam, massa
                  augue molestie eros, vel dictum mauris purus ornare enim.
                  Pellentesque volutpat posuere lacus ut volutpat. Morbi lectus
                  lacus, blandit nec arcu id, aliquam porttitor libero. Integer
                  aliquam, orci a dictum
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Index;
