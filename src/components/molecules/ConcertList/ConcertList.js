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
    {/* {data.allAirtable.nodes.map((item, id) => (
      <StyledWrapper>
        <Header concert>Najbliższy koncert: {item.data.name}</Header>
        <StyledBox key={id}>
          <img src={item.data.poster[0].url} />
          <div>
            <div>
              <img src={calendar} />
              <Paragraph>
                {item.data.day}

                <span>{item.data.date}</span>
              </Paragraph>
            </div>
            <div>
              <img src={time} />
              <Paragraph>{item.data.time} </Paragraph>
            </div>
            <div>
              <img src={place} />
              <Paragraph>{item.data.place} </Paragraph>
            </div>
            <div>
              <img src={label} />
              <Paragraph>{item.data.entrance} </Paragraph>
            </div>
            <div>
              <img src={fb} />
              <Paragraph>
                <a href={item.data.link}>link do wydarzenia</a>
              </Paragraph>
            </div>
          </div>
        </StyledBox>
      </StyledWrapper>
    ))} */}
  </>
)

export default ConcertList
