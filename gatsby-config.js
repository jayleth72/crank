module.exports = {
  siteMetadata: {
    title: "Crank with Hank Fitness",
    description: "Personal Fitness Training Website",
    author: "jay.letheby@gmail.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
  ],
}
