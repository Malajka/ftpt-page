import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"

// import Header from "components/atoms/Header/Header"
import ConcertBox from "components/molecules/ConcertBox/ConcertBox"



const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 8%;
`

const ConcertSection = ({ data }) => (
  <>
    {/* <Header title>Koncert</Header> */}
    <StyledWrapper>

      <ConcertBox data={data} />
    </StyledWrapper>
  </>
)

export default ConcertSection
