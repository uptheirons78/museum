import React from "react";
import styled from "styled-components";

// Components
import FooterGridMenu from "./FooterGridMenu";
import Credits from "./Credits";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterGridMenu />
      <Credits />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
`;
