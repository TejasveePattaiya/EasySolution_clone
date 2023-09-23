import { Box, Typography } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const MobileComponent = ({text}) => {
  return (
  <>
   <Box sx={{ display: "flex" }}>
            <ChevronLeftIcon sx={{ fontSize: 25 }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, fontWeight: 400, fontFamily: "DM Serif" }}
            >
           {text}
            </Typography>
          </Box>
  </>
  )
}

export default MobileComponent