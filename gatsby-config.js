require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            subsets: [`latin-ext`],
            variants: [`400`, `500`, `600`],
          },
          {
            family: `Poiret One`,
            variants: [`400`, `700`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `header`,
        path: `${__dirname}/src/content/header`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.API_AIRTABLE,
        tables: [
          {
            baseId: "app6D3juKCtKtNCuA",
            tableName: "Hero",
          },
          {
            baseId: "app6D3juKCtKtNCuA",
            tableName: "Concert",
          },
          {
            baseId: "app6D3juKCtKtNCuA",
            tableName: "Tour",
          },
          {
            baseId: "app6D3juKCtKtNCuA",
            tableName: "About",
            mapping: { info: "text/markdown" },
          },
          {
            baseId: "app6D3juKCtKtNCuA",
            tableName: "Band",
            mapping: { description: "text/markdown" },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,

    `gatsby-transformer-remark`,

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
