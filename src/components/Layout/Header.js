import React from "react";
import styled from "styled-components";
import SkrewedSection from "../Shared/SkrewedSection";

// Images
import SkrewedImage from "../../images/header_banner.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <SkrewedSection
        title="Museo Civico di Nepi"
        bgColor="#B20932"
        polygon="polygon(0 0, 100% 0, 95% 100%, 0% 100%)"
        height="180px"
        contentWidth="400px"
        pseudoContentWidth="395px"
        img={SkrewedImage}
      />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header``;
