import React from "react";

// Global Styles and Styled Components
import { ThemeProvider } from "styled-components";
import Theme from "../../utils/theme";
import GlobalStyles from "../Styles/GlobalStyles";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div className="main-wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
