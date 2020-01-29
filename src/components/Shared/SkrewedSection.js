import React from "react";
import styled from "styled-components";

const SkrewedSection = ({
  title,
  content,
  startingDate,
  endingDate,
  bgColor,
  polygon,
  height,
  contentWidth,
  pseudoContentWidth,
  img,
  skrewClass,
  color,
}) => {
  const sliderClass = skrewClass === "slider" ? "slider" : "";
  const collezioneClass = skrewClass === "collezione" ? "collezione" : "";
  return (
    <StyledSkrewedSection
      className={`skrewed-section ${sliderClass} ${collezioneClass}`}
      bgColor={bgColor || "#B20932"}
      color={color || "#FFF"}
      polygon={polygon || "polygon(0 0, 100% 0, 95% 100%, 0% 100%)"}
      height={height || "150px"}
      contentWidth={contentWidth || "400px"}
      pseudoContentWidth={pseudoContentWidth || "395px"}
      img={img}
    >
      <div className="skrewed-section__content">
        {title && <h1 className="skrewed-section__content-title">{title}</h1>}
        {content && <p className="skrewed-section__content-text">{content}</p>}
        {startingDate && (
          <p className="skrewed-section__content-date">
            Dal {startingDate} al {endingDate}
          </p>
        )}
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
    height: 120px;
  }

  &.slider {
    @media screen and (max-width: 600px) {
      height: 220px;
    }
  }

  &.collezione {
    margin-top: 5px;
  }

  .skrewed-section__content {
    position: relative;
    top: 0;
    left: 0;
    width: ${props => props.contentWidth};
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    clip-path: ${props => props.polygon};
    @media screen and (max-width: 600px) {
      width: 300px;
    }

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

      @media screen and (max-width: 600px) {
        width: 295px;
      }
    }

    .skrewed-section__content-title {
      color: ${props => props.color};
      text-transform: uppercase;
      margin-left: 1rem;

      @media screen and (max-width: 600px) {
        font-size: 0.8rem;
      }
    }

    .skrewed-section__content-date {
      color: ${props => props.color};
      opacity: 0.8;
      margin-left: 1rem;
      font-size: 0.8rem;

      @media screen and (max-width: 600px) {
        font-size: 0.6rem;
      }
    }

    .skrewed-section__content-text {
      color: ${props => props.color};
      opacity: 0.8;
      margin-left: 1rem;
      font-size: 0.8rem;

      @media screen and (max-width: 600px) {
        font-size: 0.6rem;
      }
    }
  }
`;
