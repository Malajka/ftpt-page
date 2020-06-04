import React from "react"
import Hero from "components/molecules/Hero/Hero"
import Video from "components/atoms/Video/Video"
import Layout from "layouts/index.js"

// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
   <Hero/>
    <Video />
  </Layout>
)

export default IndexPage

// <Layout>
//   <SEO title="Home" />
//   <Link to="/about/">Go to page 2</Link> <br />
//   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
// </Layout>
