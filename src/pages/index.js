import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo";
import SkrewedSection from "../components/Shared/SkrewedSection";
import Title from "../components/Shared/Title";
import Mosaic from "../components/Shared/Mosaic";

// Fake Data
import { projects } from "../utils/fakeprojects";

// Images
import micImage from "../images/slide03.jpg";
import collezioneImage from "../images/slide02.jpg";

const index = () => {
  const settings = {
    dots: true,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Slider {...settings}>
        {projects.map(project => (
          <SliderWrapper key={project.id}>
            <SkrewedSection
              title={project.title}
              startingDate={project.startingDate}
              endingDate={project.endingDate}
              bgColor="#B20932"
              polygon="polygon(0 0, 90% 0, 100% 100%, 0% 100%)"
              height="350px"
              contentWidth="450px"
              pseudoContentWidth="445px"
              img={project.img}
              skrewClass="slider"
            />
          </SliderWrapper>
        ))}
      </Slider>
      <Title title="Biglietti ed informazioni" />
      <SkrewedSection
        title="MIC Card"
        content="Musei Civici ad ingresso libero, mostre ed eventi speciali"
        bgColor="#e3e3e3"
        polygon="polygon(0 0, 100% 0, 97% 100%, 0% 100%)"
        height="180px"
        contentWidth="500px"
        pseudoContentWidth="495px"
        img={micImage}
        color="#000"
      />
      <SkrewedSection
        title="La Collezione"
        bgColor="#e3e3e3"
        polygon="polygon(0 0, 96% 0, 100% 100%, 0% 100%)"
        height="180px"
        contentWidth="510px"
        pseudoContentWidth="505px"
        img={collezioneImage}
        color="#000"
        skrewClass="collezione"
      />
      <Title title="Cosa Vedere a Nepi" />
      <Mosaic />
    </Layout>
  );
};

export default index;

const SliderWrapper = styled.div`
  max-width: 1052px;
  width: 100%;
  background: #fff;
  border-bottom: 5px solid #fff;

  .slick-arrow {
    display: none;
  }
`;
