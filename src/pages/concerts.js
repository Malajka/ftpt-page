import React from "react"
import styled from "styled-components"
import ConcertSection from "components/organisms/ConcertSection/ConcertSection"
import ConcertListSection from "components/organisms/ConcertListSection/ConcertListSection"

import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "layouts"
// import SEO from "../components/seo"

const Wrapper = styled.div`
  background: #000;
`
const ConcertsPage = ({ data }) => {
  return (
    <Wrapper>
      <Layout>
        <ConcertSection data={data.concert} />
        <ConcertListSection data={data.tour} />
      </Layout>
    </Wrapper>
  )
}
export default ConcertsPage
export const query = graphql`
  {
    concert: allAirtable(filter: { table: { eq: "Concert" } }) {
      nodes {
        data {
          date(formatString: "DD, YYYY")
          name
          time
          day
          link
          place
          entrance
          poster {
            url
          }
        }
      }
    }
    tour: allAirtable(filter: { table: { eq: "Tour" } }) {
      nodes {
        data {
          concerts
        }
      }
    }
  }
`
