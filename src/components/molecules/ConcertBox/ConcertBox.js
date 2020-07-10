import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"
import Paragraph from "components/atoms/Paragraph/Paragraph"
import fb from "assets/images/fb.png"
import label from "assets/images/label.png"
import place from "assets/images/place.png"
import time from "assets/images/time.png"
import calendar from "assets/images/calendar.png"

import {
  StyledBox,
  StyledImg,
  StyledWrapper,
  Poster,
  //   StyledDivider,
  //   StyledTxtBox,
} from "components/molecules/ConcertBox/ConcertBox.styled.js"

const ConcertBox = ({ data }) => (
  <>
    {console.log(data)}
    {data.nodes.map((item, id) => (
      <StyledWrapper>
        <Header concert>Najbliższy koncert: {item.data.name}</Header>
        <StyledBox key={id}>
          {console.log(item.data.poster)}
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
    ))}
  </>
)

export default ConcertBox
