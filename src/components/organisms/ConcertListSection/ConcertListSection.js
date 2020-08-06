import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"

// import Header from "components/atoms/Header/Header"
import ConcertList from "components/molecules/ConcertList/ConcertList"

const StyledWrapper = styled.div`

`

const ConcertListSection = ({ data }) => (
  <>
    {/* <Header title>Koncert</Header> */}
    <StyledWrapper>

      <ConcertList data={data} />
    </StyledWrapper>
  </>
)

export default ConcertListSection
