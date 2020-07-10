import React from "react"
import styled from "styled-components"
import Button from "components/atoms/Button/Button"
import Header from "components/atoms/Header/Header"
import {
  StyledHero,
  HeaderWrapper,
} from "components/molecules/Hero/Hero.styled.js"



const Hero = ({children}) => (
  <>
    <StyledHero />
    <HeaderWrapper>
      <Header>{children}</Header>
      <Button hero>Więcej informacji</Button>
    </HeaderWrapper>
  </>
)

export default Hero
