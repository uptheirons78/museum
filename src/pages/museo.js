import React from "react";
import { lorem100 } from "../utils/fake";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo";
import SkrewedSection from "../components/Shared/SkrewedSection";
import Title from "../components/Shared/Title";
import Content from "../components/Shared/Content";
import Mosaic from "../components/Shared/Mosaic";

// Images
import artImage from "../images/slide01.jpg";

const Museo = () => {
  const contenuto =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ";
  return (
    <Layout>
      <SEO title="Presentazione del Museo" />
      <Title title="Presentazione del Museo" />
      <SkrewedSection
        title="In breve"
        content={contenuto}
        bgColor="#e3e3e3"
        polygon="polygon(0 0, 100% 0, 95% 100%, 0% 100%)"
        height="350px"
        contentWidth="600px"
        pseudoContentWidth="595px"
        img={artImage}
        color="#000"
      />
      <Content>
        <p>{lorem100}</p>
        <p>{lorem100.slice(0, 700)}</p>
        <p>{lorem100.slice(0, 500)}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum{" "}
          <a href="/">consectetur similique</a> error optio voluptatum quo.
          Veniam placeat consectetur <strong>consequuntur</strong>.
        </p>
      </Content>
      <Title title="Cosa Vedere a Nepi" />
      <Mosaic />
    </Layout>
  );
};

export default Museo;
