import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-50">
        <div className="container flex justify-center flex-col items-center">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
