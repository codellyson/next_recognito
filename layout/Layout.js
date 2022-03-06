import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children, ...props }) {
  return (
    <>
      <Navbar {...props} />
      <main {...props}> {children}</main> <Footer {...props} />
    </>
  );
}

export default Layout;
