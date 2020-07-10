import React from "react"
import { graphql } from "gatsby"
import Hero from "components/molecules/Hero/Hero"
import Video from "components/atoms/Video/Video"
import Layout from "layouts/index.js"

// import SEO from "../components/seo"
// export const query = graphql`
//   {
//     allMdx {
//       nodes {
//         frontmatter {
//           hero
//         }
//       }
//     }
//   }
// `
export const query = graphql`
         {
           allAirtable(filter: { table: { eq: "Hero" } }) {
             edges {
               node {

                 data {
                   concert
                 }
               }
             }
           }
         }
       `


const IndexPage = ({ data }) => {

                                  return (
                                    <Layout>
                                      {/* {console.log(data.allAirtable.edges[0])} */}
                                      <Hero>
                                        {data.allAirtable.edges[0].node.data.concert }
                                      </Hero>
                                      <Video />
                                    </Layout>
                                  )
                                }
export default IndexPage

    /* <Hero>
      {data.allMdx.nodes.map(item => (
        <> {item.frontmatter.hero}</>
      ))}
    </Hero> */

// <Layout>
//   <SEO title="Home" />

// </Layout>
// allMdx:
// nodes: Array(1)
// 0:
// frontmatter: {hero: "hurra koncert!"}
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object
// __proto__: Object
