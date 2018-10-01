module.exports = {
  "plugins": [
    "gatsby-plugin-react-helmet",
    {
      "options": {
        "background_color": "#663399",
        "display": "minimal-ui",
        // This path is relative to the root of the site.
        "icon": "src/images/gatsby-icon.png",
        "name": "gatsby-starter-default",
        "short_name": "starter",
        "start_url": "/",
        "theme_color": "#663399",
      },
      "resolve": `gatsby-plugin-manifest`,
    },
    "gatsby-plugin-offline",
  ],
  "siteMetadata": {
    "title": "Meep: The Pet Simulator",
  },
};
