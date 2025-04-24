import "./Layout.css";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <a id="top"></a>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
