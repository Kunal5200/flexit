import React, { ReactHTMLElement, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { data } from "@/assets/data";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
