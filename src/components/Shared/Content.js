import React from "react";
import styled from "styled-components";

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;

const StyledContent = styled.section`
  padding: 1rem;
  margin-top: 1rem;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;
