import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#C42524",
    },
    secondary: {
      main: "#353638",
      bg: "#282727",
    },
    third: {
      main: "#FEE50D",
    },
    info: {
      main: "#727272",
    },
    input: {
      main: "#DEDEDE",
      outline: "#DDDADA",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#ffffff",
    },
    shubham: {
      main: "#57A2F9",
    },
    hover: {
      main: "#0029FF",
    },
    yellow: {
      main: "rgba(254, 229, 13, 1)",
    },
    dark: {
      main: "rgba(68, 68, 68, 1)",
    },

  gray: {
      main: "rgba(68, 68, 68, 1)",
      border:'#9E9E9E'
    },
 
  graydark: {
      main: "#757575",
    },
 
 btn: {
      main: "#F47B20",
    },
 

  },
  typography: {
    fontFamily: "Inter",
    // fontFamily: 'Poppins',
  },
});
