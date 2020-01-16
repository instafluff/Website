module.exports = {
  siteMetadata: {
    title: `Instafluff`,
    titleTemplate: "%s · Comfiest Coder & Mug Chef",
    description: `Creator of StreamPuppy! Get Comfy at the Coding Cafe on Twitch Wed/Thu/Fri 8am PST`,
    author: `Instafluff`,
    url: "https://www.instafluff.tv",
    image: "https://www.instafluff.tv/assets/Profile.png",
    twitterUsername: "@instafluffTV",
  },
  plugins: [
	  `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
