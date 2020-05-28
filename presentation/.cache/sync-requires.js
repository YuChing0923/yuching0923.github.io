const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js": hot(
    preferDefault(
      require("/Users/jeanchang/Documents/sourcetree/project/githubio/presentation/node_modules/gatsby-theme-mdx-deck/src/templates/deck.js")
    )
  ),
  "component---node-modules-gatsby-theme-mdx-deck-src-templates-decks-js": hot(
    preferDefault(
      require("/Users/jeanchang/Documents/sourcetree/project/githubio/presentation/node_modules/gatsby-theme-mdx-deck/src/templates/decks.js")
    )
  )
};
