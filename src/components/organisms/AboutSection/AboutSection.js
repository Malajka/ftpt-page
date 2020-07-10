import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useOnClickOutside } from "hooks/hooks.js"
import AboutBox from "components/molecules/AboutBox/AboutBox.js"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top:5rem;

`

const AboutSection = ({data}) => {


  return (
    <StyledWrapper>
      <AboutBox data={data}/>

    </StyledWrapper>
  )
}

export default AboutSection
// data.allDatoCmsAbout.nodes.about.DatoCmsTitle.aboutTitleTxt
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(max-device-width: 500px)",
//   })
//   const [open, setOpen] = useState(false)
//   const node = useRef()
//   useOnClickOutside(node, () => setOpen(false))

    /* </StyledBox> */


    /* <StyledBox src={data.foundation.childImageSharp.fixed.src}>
        <AboutBox />
      </StyledBox> */
//  datoCmsAboutFtpt {
//       aboutFtpt {
//         ... on DatoCmsAboutParagraphTxt {
//           id
//           aboutParagraphTxt
//         }
//         ... on DatoCmsTitle {
//           id
//           aboutTitleTxt
//         }
//       }
//     }
