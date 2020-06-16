import React from "react"
import InfoSection from "components/organisms/InfoSection/InfoSection"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "layouts"
// import SEO from "../components/seo"

const AboutPage = ({ data }) => {



  return (
    <Layout>
      {/* {data.allDatoCmsPartytura.edges.map((item) =>
      <>
      <p>{item.node.name}</p>
      <p>{item.node.kaka}</p>
      </>
      )} */}
      <InfoSection data={data}/>
    </Layout>
  )
}
export default AboutPage

export const query = graphql`
         {
           allDatoCmsAbout {
             edges {
               node {
                 title
                 excerpt
                 paragraph
                 id
                 image {
                   alt
                   url
                 }
                 paragraphImg {
                   alt
                   url
                 }
               }
             }
           }
         }
       `
