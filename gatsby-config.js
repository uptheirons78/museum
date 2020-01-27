module.exports = {
  siteMetadata: {
    title: "Museo Civico di Nepi",
    description:
      "This repo contains an example of local museum website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Museo Civico di Nepi`,
        short_name: `MuseoCivicoNepi`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#B20932`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
