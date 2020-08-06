import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"
import background from "assets/images/concerts-bg.png"
// import Header from "components/atoms/Header/Header"
import ConcertBox from "components/molecules/ConcertBox/ConcertBox"



const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 8%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  background-size: 30%;
  border-radius: 30px;
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
