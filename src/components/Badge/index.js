import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartDetails } from "../../redux/festures/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Badges({ children, chat }) {
  const token = localStorage.getItem("token");
  // const dispatch = useDispatch();
  // const { cartData } = useSelector((state) => ({
  //   ...state.cart,
  // }));
  // const { notify } = useSelector((state) => ({ ...state.notify }));
  // console.log(notify);
  return (
    <>
      {chat && (
        // notify.data && notify.data.length > 0 && token ? (
        <StyledBadge
          badgeContent={
            // notify?.count
            1
          }
          color="primary"
        >
          {children}
        </StyledBadge>
        // ) : (
        // children
        // )
        // ) : cartData?.data && cartData?.data.length > 0 && token ? (
        // <StyledBadge badgeContent={cartData?.data.length} color="primary">
        //   {children}
        // </StyledBadge>
        // ) : (
        // children
      )}
    </>
  );
}
