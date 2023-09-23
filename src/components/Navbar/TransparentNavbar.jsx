import SearchIcon from "@mui/icons-material/Search";
import { Adb, MenuBookOutlined, SearchOffRounded } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../Utils/Constant/Services";
import BasicModal from "../Modal";
import { handleModalOpen } from "../../Redux/LoginSlice";
import { useDispatch } from "react-redux";

const pages1 = ["Register As A Professional", "Help", "Login/ Sign up"];
// const settings = ["Home", "Service", "About Us", "Contact Us"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  fontFamily: "inter",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontFamily: "inter",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "328px",
    },
  },
}));

const TransparentNavbar = ({ isToken }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const dispatch = useDispatch();
  return (
    <>
      <AppBar
        position="sticky"
        top={5}
        sx={{
          "&.MuiAppBar-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            "& 	.MuiContainer-root": {
              bgcolor: "transparent",
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              "& 	.MuiToolbar-root": {
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "inter",
              },
            }}
          >
            <Box
              sx={{ width: "5rem", height: "100%" }}
              component={Link}
              to="/home-page"
            >
              <img
                src={require("../../assets/images/logo.png")}
                style={{ width: "100%", height: "100%" }}
                alt="logo"
                title="easy_solution"
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuBookOutlined />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page?.name} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      component={Link}
                      to={page?.link}
                    >
                      {page?.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                width: "5rem",
                height: "100%",
                display: { xs: "flex", md: "none" },
              }}
              component={Link}
              to="/home-page"
            >
              <img
                src={require("../../assets/images/logo.png")}
                style={{ width: "100%", height: "100%" }}
                alt="logo"
                title="easy_solution"
              />
            </Box>

            {isToken && (
              <>
                <Search
                  sx={{
                    border: 1,
                    borderColor: "white.main",
                    borderRadius: 3,
                  }}
                >
                  <SearchIconWrapper sx={{ color: "white.main" }}>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                  sx={{ display: { xs: "none", md: "flex" }, gap: 2, mx: 2 }}
                >
                  {pages.map((page) => (
                    <Typography
                      key={page?.name}
                      component={Link}
                      to={page?.link}
                      // onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white.main",
                        display: "block",
                        fontFamily: "inter",
                        fontWeight: 400,
                        "&:hover": {
                          color: "third.main",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {page?.name}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 3,
                    borderRadius: 2,
                    fontFamily: "inter",
                    fontWeight: 400,
                  }}
                >
                  Login
                </Button>
                <Box sx={{ flexGrow: 0, display: "none" }}>
                  <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={require("../../assets/images/0000-shraddha-kapoor.jpg")}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {pages.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography
                          component={Link}
                          to={setting?.link}
                          textAlign="center"
                          sx={{ fontFamily: "Inter" }}
                        >
                          {setting?.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </>
            )}

            {!isToken && (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {pages1.map((page) => (
                    <Button
                      key={page}
                      onClick={() => {
                        handleCloseNavMenu();
                        if (page === "Login/ Sign up") {
                          dispatch(handleModalOpen(true));
                        }
                      }}
                      // onClick={() => dispatch(handleModalOpen(true))}
                      sx={{
                        my: 2,
                        color: "white.main",
                        display: "block",
                        fontFamily: "inter",
                        "&:hover": {
                          color: "third.main",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default TransparentNavbar;
