import React from "react"
import styled from "styled-components"
import Button from "components/atoms/Button/Button"
import Header from "components/atoms/Header/Header"
import { StyledHero } from "components/molecules/Hero/Hero.styled.js"

const HeaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Hero = () => (
  <>
    <StyledHero />
    <HeaderWrapper>
      <Header>Najbliższy koncert 26 września 2020</Header>
      <Button hero>Więcej informacji</Button>
    </HeaderWrapper>
  </>
)

export default Hero
