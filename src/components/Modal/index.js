import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton, useMediaQuery, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
export default function BasicModal({
  children,
  show,
  unShow,
  width,
  height,
  overflowY,
  padding,
  title,
}) {
  const isMobile = useMediaQuery("(max-width:870px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : 600,
    height: height ? height : 600,
    overflowY: overflowY ? "scroll" : "",
    // bgcolor: darkMode ? white.main : dark.main,
    border: "0px solid #000",
    boxShadow: 24,
    borderRadius: 8,
    p: padding ? padding : 4,
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      display: "none",
    },
  };
  return (
    <div>
      <Modal
        open={show}
        onClose={() => unShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "white.main",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "100%" : width ? width : 600,
            height: height ? height : "auto",
            borderRadius: 1.5,
            boxShadow: 24,
            // p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              py: 1,
              borderBottom: 0.5,
              borderColor: "secondary.main",
            }}
          >
            <Typography variant="h6" color="initial" fontWeight={600}>
        
              {title || "Welcome to Easy Solution"}
            </Typography>
            <IconButton
              onClick={() => {
                unShow(false);
              }}
              sx={{
                color: "primary.main",
                // color:'#000',
                // position: "fixed",
                // top: 10.5,
                // right: 10.5,
                border:1,
                borderRadius: 3,
                p: 0.5,
                borderColor: "primary.main",
                zIndex: 999,
              }}
            >
            
              <Close
                sx={{
                  color: "primary.main",
                  // fontSize:14,
                  // color:'#000'
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",

              width: "98%",
              height: "98%",
              overflowY: overflowY ? "scroll" : "",
              // bgcolor: darkMode ? white.main : dark.main,

              p: padding ? padding : 2,
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                width: "0.4em",
                display: "none",
              },
            }}
          >
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
