import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useOnClickOutside } from "hooks/hooks.js"
import InfoBox from "components/molecules/InfoBox/InfoBox.js"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top:5rem;

`

const InfoSection = ({data}) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allDatoCmsTitle {
  //       nodes {
  //         aboutTitleTxt
  //       }
  //     }
  //     allDatoCmsAboutParagraphTxt {
  //       nodes {
  //         aboutParagraphTxt
  //       }
  //     }
  //   }
  // `)

// const {allDatoCmsTitle: {nodes}} = data
// const {allDatoCmsAboutParagraphTxt:{nodes:paragraph}} = data

  return (
    <StyledWrapper>
      <InfoBox data={data}/>
      {/* <StyledBox> */}
      {/* {data.datoCmsPartytura.map(item => (
        <>
          {console.log(item)}
          <InfoBox data={item.name} />
        </>
      ))} */}
    </StyledWrapper>
  )
}

export default InfoSection
// data.allDatoCmsAbout.nodes.about.DatoCmsTitle.aboutTitleTxt
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(max-device-width: 500px)",
//   })
//   const [open, setOpen] = useState(false)
//   const node = useRef()
//   useOnClickOutside(node, () => setOpen(false))

    /* </StyledBox> */


    /* <StyledBox src={data.foundation.childImageSharp.fixed.src}>
        <InfoBox />
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
