import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    @media screen and (max-width: 599px) {
      font-size: 15px;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #363636;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 900;
    letter-spacing: 1px;
  }
  p {
    color: ${props => props.theme.lightBlack};
    font-size: 1rem;
  }

  strong {
    color: ${props => props.theme.primaryColor};
    transition: all .350s ease;
  }

  a, a:link, a:visited {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    font-weight: 700;
    transition: all .350s ease;
  }

  a:hover {
    color: ${props => props.theme.secondaryColor};
  }

  .main-wrapper {
    max-width: 1052px;
    width: 100%;
    /* border: 1px solid red; */
    margin: 0 auto;
    background-color: #FFFFFF;
  }

  .cookies-link {
    color: #FAA916 !important;
    transition: all .350s ease-in-out;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    text-align: left !important;
    bottom: 25px !important;
    padding: 0.5rem;

    li {
      button {
        &:before {
          font-size: 8px !important;
          color: #fff !important;
        }
      }
    }
  }

`;

export default GlobalStyle;
