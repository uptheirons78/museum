import React from "react";
import styled from "styled-components";

const FooterMenu = () => {
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
    <StyledFooterMenu>
      <div className="footer-menu__container one">
        <h1>museo</h1>
        <ul className="footer-nav">
          {museoLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-menu__container two">
        <h1>info</h1>
        <ul className="footer-nav">
          {infoLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-menu__container three">
        <h1>eventi</h1>
        <ul className="footer-nav">
          {eventiLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-menu__container four">
        <h1>sito e privacy</h1>
        <ul className="footer-nav">
          {siteLinks.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooterMenu>
  );
};

export default FooterMenu;

const StyledFooterMenu = styled.section`
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .footer-menu__container {
    padding-right: 1rem;
    padding-left: 1rem;
    &:not(:first-child) {
      border-left: 1px solid #fff;
    }

    h1 {
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    p {
      color: #fff;
      font-size: 0.8rem;
      text-align: justify;
      margin-top: 0.7rem;
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
`;
