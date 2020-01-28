import React from "react";

// Global Styles and Styled Components
import { ThemeProvider } from "styled-components";
import Theme from "../../utils/theme";
import GlobalStyles from "../Styles/GlobalStyles";

// Context
import MenuContextProvider from "../../context/MenuContext";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <MenuContextProvider>
        <div className="main-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </MenuContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
