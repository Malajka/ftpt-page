const path = require("path")
const pathGraph = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}


// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const HeroTextTemplate = pathGraph.resolve(`src/pages/index.js`);
//   const result = await graphql(`
//    allDatoCmsHero {
//     nodes {
//       heroText
//     }
//   }`
//   );
// }



//     // Create blog post pages.
//     result.data.allMdx.nodes.forEach(text => {
//       createPage({
//         // Path for this page — required
//         // path: `${edge.node.frontmatter.slug}`,
//         component: HeroTextTemplate,
//         context: {
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }
