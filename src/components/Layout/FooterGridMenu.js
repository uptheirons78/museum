import React from "react";
import styled from "styled-components";

const FooterGridMenu = () => {
  const museoLinks = ["Presentazione", "Collezione", "Staff"];
  const infoLinks = [
    "Contatti",
    "Biglietti",
    "MIC Card",
    "Condizioni di gratuità e riduzioni",
    "Prenotazioni",
    "Condizioni di Accesso",
  ];
  const eventiLinks = ["In corso", "In programma", "In archivio"];
  const siteLinks = [
    "Privacy Policy",
    "Cookies Policy",
    "Accessibilità del sito",
    "Credits",
  ];
  return (
    <StyledFooterGridMenu className="footer-grid-menu">
      <div className="footer-grid-menu__item one">
        <h1>museo</h1>
        <ul className="footer-nav">
          {museoLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-grid-menu__item two">
        <h1>info</h1>
        <ul className="footer-nav">
          {infoLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-grid-menu__item three">
        <h1>eventi</h1>
        <ul className="footer-nav">
          {eventiLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-grid-menu__item four">
        <h1>sito e privacy</h1>
        <ul className="footer-nav">
          {siteLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooterGridMenu>
  );
};

export default FooterGridMenu;

const StyledFooterGridMenu = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;

  .footer-grid-menu__item {
    padding: 0.5rem;
    h1 {
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .footer-nav {
      list-style-type: none;
      a {
        color: #fff;
        font-size: 0.7rem;
        font-weight: 600;
        display: block;
        margin-bottom: 0.1rem;
      }
    }
  }

  .one,
  .two,
  .three,
  .four {
    grid-column: span 1;
  }

  .two,
  .three,
  .four {
    border-left: 1px solid #fff;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);

    .three {
      border: none;
    }
  }
`;
