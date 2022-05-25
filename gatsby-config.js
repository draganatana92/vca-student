module.exports = {
  siteMetadata: {
    siteUrl: "https://vcastudentsportal.gtsb.io/",
    title: "VCA Students Portal",
    description:
      "VCA Student Portal. We offer free opportunities to learn the animal treatments."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
