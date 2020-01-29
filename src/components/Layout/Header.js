import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Images
import Intro from "./Intro";
import MobileNavigation from "./MobileNavigation";
import SkrewedSection from "../Shared/SkrewedSection";

// Images
import SkrewedImage from "../../images/header_banner.jpg";

// Pages
import { sitePages } from "../../utils/pages";

const Header = () => {
  return (
    <header>
      <Intro />
      <SkrewedSection
        title="Museo Civico di Nepi"
        bgColor="#B20932"
        polygon="polygon(0 0, 100% 0, 95% 100%, 0% 100%)"
        height="180px"
        contentWidth="420px"
        pseudoContentWidth="415px"
        img={SkrewedImage}
      />
      <Navigation>
        <ul>
          {sitePages.map(page => (
            <li key={page.name}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </Navigation>
      <MobileNavigation />
    </header>
  );
};

export default Header;

const Navigation = styled.nav`
  background: #fff;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;

    li {
      flex-grow: 1;
      text-align: center;
      padding: 0.2rem 0;

      &:not(:first-child) {
        border-left: 1px solid #ccc;
      }
      a {
        color: #000;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.1rem;

        @media screen and (max-width: 900px) {
          font-size: 0.9rem !important;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    li {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;
