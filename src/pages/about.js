import React from "react"
import AboutSection from "components/organisms/AboutSection/AboutSection"
import BandSection from "components/organisms/BandSection/BandSection"

import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "layouts"
// import SEO from "../components/seo"

const AboutPage = ({ data }) => {



  return (
    <Layout>
      <AboutSection data={data.about} />
      <BandSection data={data.band} />
    </Layout>
  )
}
export default AboutPage
export const query = graphql`
         {
           about: allAirtable(
             sort: { fields: id, order: ASC }
             filter: { table: { eq: "About" } }
           ) {
             nodes {
               data {
                 excerpt
                 title
                 img {
                   url
                 }
                 bgImg {
                   url
                 }
                 info {
                   childMarkdownRemark {
                     rawMarkdownBody
                   }
                 }
               }
             }
           }
           band: allAirtable(
             sort: { fields: id, order: ASC }
             filter: { table: { eq: "Band" } }
           ) {
             edges {
               node {
                 data {
                   img {
                     url
                   }

                   description {
                     childMarkdownRemark {
                       rawMarkdownBody
                     }
                   }
                 }
               }
             }
           }
         }
       `


