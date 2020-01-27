import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <section className="slanted">
        <div className="left">
          <h1>Museo Civico di Nepi</h1>
        </div>
        <div className="right"></div>
      </section>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  .slanted {
    background: ${props => props.theme.primaryColor};
    width: 100%;
    height: 120px;
    display: flex;

    .left {
      width: 35%;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      /* transform: translateX(5px); */
      clip-path: polygon(0 0, 100% 0, 96% 100%, 0% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      h1 {
        text-transform: uppercase;
      }
    }

    .right {
      width: 65%;
      height: 100%;
      background: url("http://www.museodiromaintrastevere.it/sites/default/files/styles/large/public/storage/images/musei/museo_di_roma_in_trastevere/il_museo/editoriale/2484-25-ita-IT/editoriale.jpg?itok=HYHyyEZj");
      background-repeat: none;
      background-position: center center;
      background-size: cover;
      /* transform: translateX(-5px); */
      clip-path: polygon(2% 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;
