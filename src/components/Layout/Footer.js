import React from "react";
import styled from "styled-components";

// Components
import FooterMenu from "./FooterMenu";
import Credits from "./Credits";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenu />
      <Credits />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  /* padding: 0 1rem; */
  background-color: ${props => props.theme.primaryColor};
`;
