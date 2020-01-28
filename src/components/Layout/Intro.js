import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import styled from "styled-components";

import Logo from "../../images/comune.png";
import Social from "../Shared/Social";

const Intro = () => {
  const { isToggled, toggleMenu } = useContext(MenuContext);
  const menuText = isToggled ? "Close" : "Menu";
  return (
    <StyledIntro className="intro-section">
      <div className="left">
        <div className="logo-container">
          <img src={Logo} alt="Logo Comune di Nepi" />
        </div>
        <div className="title-container">
          <h3>Comune di Nepi</h3>
          <p>Assessorato alla Crescita Culturale</p>
        </div>
      </div>
      <div className="right">
        <Social socialClassName="intro" />
        <button className="mobileToggler" onClick={toggleMenu}>
          {menuText}
        </button>
      </div>
    </StyledIntro>
  );
};

export default Intro;

const StyledIntro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .left {
    display: flex;
    align-items: center;

    .logo-container {
      width: 50px;
      margin-right: 0.5rem;

      img {
        width: 100%;
      }
    }

    .title-container {
      p {
        font-size: 0.7rem;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    button {
      display: none;
      margin-left: 0.5rem;
      background: ${props => props.theme.primaryColor};
      color: #fff;
      border: none;
      padding: 0.4rem 0.8rem;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;

      @media screen and (max-width: 600px) {
        display: block;
      }
    }
  }
`;
