import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"
import unified from "unified"
import markdown from "remark-parse"
import html from "remark-html"
// import Header from "components/atoms/Header/Header"
import BandBox from "components/molecules/BandBox/BandBox"



const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 8%;
`

const BandSection = ({ data }) => (
  <>
    <Header title>ZESPÓŁ</Header>
    <StyledWrapper>
      <BandBox data={data} />
    </StyledWrapper>

  </>
)

export default BandSection
