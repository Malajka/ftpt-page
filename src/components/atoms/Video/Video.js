import React from 'react'
import { StyledVideo } from "./Video.styled"
import DogVideo from "assets/videos/hero.mp4"




const Video = () => (
  <StyledVideo controls={false} autoPlay loop muted>
    <source src={DogVideo} type="video/mp4" />
  </StyledVideo>
)
export default Video
