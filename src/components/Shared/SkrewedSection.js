import React from "react";
import styled from "styled-components";

const SkrewedSection = ({
  title,
  bgColor,
  polygon,
  height,
  contentWidth,
  pseudoContentWidth,
  img,
}) => {
  return (
    <StyledSkrewedSection
      className="skrewed-section"
      bgColor={bgColor || "#B20932"}
      polygon={polygon || "polygon(0 0, 100% 0, 95% 100%, 0% 100%)"}
      height={height || "150px"}
      contentWidth={contentWidth || "400px"}
      pseudoContentWidth={pseudoContentWidth || "395px"}
      img={img}
    >
      <div className="skrewed-section__content">
        <h1 className="skrewed-section__content-title">{title}</h1>
      </div>
    </StyledSkrewedSection>
  );
};

export default SkrewedSection;

const StyledSkrewedSection = styled.section`
  width: 100%;
  height: ${props => props.height};
  margin: 0 auto;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 600px) {
    height: 75px;
  }

  .skrewed-section__content {
    position: relative;
    top: 0;
    left: 0;
    width: ${props => props.contentWidth};
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    clip-path: ${props => props.polygon};

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${props => props.pseudoContentWidth};
      height: 100%;
      background: ${props => props.bgColor};
      clip-path: ${props => props.polygon};
      z-index: -1;
    }

    .skrewed-section__content-title {
      color: #fff;
      text-transform: uppercase;
      margin-left: 1rem;
    }
  }
`;
