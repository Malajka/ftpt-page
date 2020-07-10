import React from "react"
import styled from "styled-components"
import Header from "components/atoms/Header/Header"
import unified from "unified"
import markdown from "remark-parse"
import html from "remark-html"
// import Header from "components/atoms/Header/Header"
import {

  StyledBox,
  StyledImg,
  StyledDivider,
  StyledTxtBox,
} from "components/molecules/BandBox/BandBox.styled.js"

const BandBox = ({ data }) => (
  <>


      {data.edges.map((item, id) => (
        <StyledBox key={id} bg={item.node.data.img[0].url}>
          <StyledImg>
            <StyledDivider />

            <StyledTxtBox
              dangerouslySetInnerHTML={{
                __html: unified()
                  .use(markdown)
                  .use(html)
                  .processSync(
                    item.node.data.description.childMarkdownRemark
                      .rawMarkdownBody
                  ),
              }}
            />
          </StyledImg>
        </StyledBox>
      ))}

  </>
)

export default BandBox
