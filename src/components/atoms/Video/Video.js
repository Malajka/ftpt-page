import React from 'react'
import { StyledVideo } from "./Video.styled"
import HeroVideo from "assets/videos/hero.mp4"




const Video = () => (
  <StyledVideo controls={false} autoPlay loop muted>
    <source src={HeroVideo} type="video/mp4" />
  </StyledVideo>
)
export default Video
