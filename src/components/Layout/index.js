import React from "react";
import Footer from "../Footer";
import Navbaar from "../Navbar/NavBaar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbaar isToken={true} Layout={true} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
