import React from "react";
import Footer from "../components/Footer";
import "halfmoon/css/halfmoon.css";
// import halfmoon from "halfmoon";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
function Layout({ children, ...props }) {
  return (
    <>
      <Navbar {...props} />
      <main {...props}> {children}</main>
    </>
  );
}

export default Layout;
