import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.div`
  background: ${props => props.theme.primaryColor};
  border-bottom: 5px solid #fff;
  padding: 1rem 0;
  h1 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600 !important;
    text-transform: uppercase;
    padding: 0 1rem;

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
