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
          0761570664
        </p>
        <p className="credits__text">
          &copy; {year} Comune di Nepi - Email: museo@comune.nepi.vt.it
        </p>
      </div>
    </StyledCredits>
  );
};

export default Credits;

const StyledCredits = styled.section`
  margin-top: 1rem;
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
    font-size: 0.7rem;
    color: #fff;
    line-height: 2;

    a {
      font-size: 0.7rem;
      color: #fff;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;

    .right {
      text-align: left;
      margin-top: 0.5rem;
    }
  }
`;
