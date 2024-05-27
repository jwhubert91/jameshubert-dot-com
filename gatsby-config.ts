import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jameshubert-dot-com-2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sitemap",
    "gatsby-plugin-postcss", "gatsby-plugin-react-svg", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Inter`,
        'Homemade Apple',
      ],
      display: 'swap'
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
  },"gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp"]
};

export default config;
