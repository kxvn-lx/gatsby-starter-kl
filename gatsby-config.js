const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const path = require(`path`)

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: `Gatsby Starter`,
        description: `Gatsby starter`,
        author: `@kevinlx_`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal["400"],
                display: `minimal-ui`,
                icon: `src/images/tailwind-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        `gatsby-plugin-offline`,
    ],
};
