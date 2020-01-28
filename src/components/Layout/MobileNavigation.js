import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { MenuContext } from "../../context/MenuContext";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

import { sitePages } from "../../utils/pages";

const MobileNavigation = () => {
  const { isToggled, toggleMenu } = useContext(MenuContext);
  const menuClass = isToggled ? "mobile-nav open" : "mobile-nav";
  return (
    <StyledMobileNavigation className={menuClass} onClick={toggleMenu}>
      <div className="mobile-nav__info">
        <h1>Museo Civico di Nepi</h1>
      </div>
      <ul>
        {sitePages.map(page => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mobile-nav__social">
        <li className="social-link">
          <a href="/">
            <FaEnvelope />
          </a>
        </li>
        <li className="social-link">
          <a href="/">
            <FaFacebookF />
          </a>
        </li>
        <li className="social-link">
          <a href="/">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-link">
          <a href="/">
            <FaTwitter />
          </a>
        </li>
      </div>
    </StyledMobileNavigation>
  );
};

export default MobileNavigation;

const StyledMobileNavigation = styled.nav`
  position: absolute;
  top: 0;
  left: -100%;
  width: 82%;
  height: 100vh;
  background: ${props => props.theme.primaryColor};
  z-index: 100;
  visibility: hidden;
  transition: all 0.65s ease;

  &.open {
    left: 0;
    display: block;
    visibility: visible;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 5vh;
    margin-right: 2rem;
    li {
      padding: 0.5rem 0;
      a {
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.1rem;
      }
    }
  }

  .mobile-nav__info {
    text-align: right;
    margin-right: 2rem;
    margin-top: 2vh;
    h1 {
      text-transform: uppercase;
      font-weight: 600;
      color: #fff;
    }
  }

  .mobile-nav__social {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin-right: 2rem;
    margin-top: 2vh;
    li {
      margin-left: 0.6rem;
    }
    svg {
      fill: ${props => props.theme.primaryColor};
      background: #fff;
      width: 2rem;
      height: 2rem;
      padding: 0.4rem;
    }
  }
`;
