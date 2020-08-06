import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"
import Paragraph from "components/atoms/Paragraph/Paragraph"


import {
  StyledBox,
  StyledImg,
  StyledWrapper,
  Poster,
  //   StyledDivider,
  //   StyledTxtBox,
} from "components/molecules/ConcertList/ConcertList.styled.js"

const ConcertList = ({ data }) => (
  <>
  <Header concert>NADCHODZĄCE KONCERTY</Header>
    {console.log(data)}
    {data.nodes.map((item, id) => (
      <Paragraph>{item.data.concerts}</Paragraph>
    ))}

  </>
)

export default ConcertList
