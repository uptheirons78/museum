import React from "react";
// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo";

const index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, est,
          iste debitis eos veritatis maxime omnis quod nesciunt at vitae modi
          rem enim aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur,{" "}
          <strong>adipisicing elit</strong>. Recusandae, ab?
        </p>
        <div>
          <a href="/">This is a link</a>
        </div>
      </div>
    </Layout>
  );
};

export default index;
