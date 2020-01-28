import React from "react";
import styled from "styled-components";

// Images
import tripAdvisorImage from "../../images/tripbianco.png";

const Credits = () => {
  const year = new Date().getFullYear();
  return (
    <StyledCredits>
      <div className="left">
        <img
          className="credits__trip"
          src={tripAdvisorImage}
          alt="TripAdvisor Logo"
        />
        <p className="credits__text">
          Leggi le recensioni su: <a href="/">Museo Civico di Nepi</a>
        </p>
      </div>
      <div className="right">
        <p className="credits__text">
          Museo Civico di Nepi, Via Falisca 26 - 01036 Nepi(VT) - Tel.
          0761570664 - Email: museo@comune.nepi.vt.it
        </p>
        <p className="credits__text">&copy; {year} Comune di Nepi</p>
      </div>
    </StyledCredits>
  );
};

export default Credits;

const StyledCredits = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    .credits__trip {
      width: 150px;
    }
  }

  .right {
    text-align: right;
  }
  .credits__text {
    margin-top: -5px;
    font-size: 0.8rem;
    color: #fff;
    line-height: 1.7;

    a {
      font-size: 0.8rem;
      color: #fff;
    }
  }
`;
