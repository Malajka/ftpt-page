const path = require("path")
// const pathGraph = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}



// exports.createPages = ({ graphql, actions }) => {
//   // createPage is a built in action,
//   // available to all gatsby-node exports
//   const { createPage } = actions
//   return new Promise(async resolve => {
//     // we need the table name (e.g. "Sections")
//     // as well as the unique path for each Page/Section.
//     const result = await graphql(`
//       {
//         allAirtable {
//           edges {
//             node {
//               table
//               data {
//                  name

//                }
//              }
//             }
//           }
//         }
//        `)
//     // For each path, create a page and decide which template to use.
//     // values inside the context Object are available in the page's query
//     result.data.allAirtable.edges.forEach(({ node }) => {
//       const isPage = node.table === 'About'
//       createPage({
//         path: node.data.name,
//         component: isPage && path.resolve(`./src/pages/about.js`),
//           // ? path.resolve(`./src/templates/page-template.js`)
//           // : path.resolve(`./src/templates/section-template.js`),
//         context: {
//           Path: node.data.name,
//         },
//       })
//     })
//     resolve()

//   })
// }

// // exports.createPages = async ({ graphql, actions }) => {
// //   const { createPage } = actions
// //   const HeroTextTemplate = pathGraph.resolve(`src/pages/index.js`);
// //   const result = await graphql(`
// //    allDatoCmsHero {
// //     nodes {
// //       heroText
// //     }
// //   }`
// //   );
// // }



// //     // Create blog post pages.
// //     result.data.allMdx.nodes.forEach(text => {
// //       createPage({
// //         // Path for this page — required
// //         // path: `${edge.node.frontmatter.slug}`,
// //         component: HeroTextTemplate,
// //         context: {
// //           // Add optional context data to be inserted
// //           // as props into the page component..
// //           //
// //           // The context data can also be used as
// //           // arguments to the page GraphQL query.
// //           //
// //           // The page "path" is always available as a GraphQL
// //           // argument.
// //         },
// //       })
// //     })
// //   })
// // }
