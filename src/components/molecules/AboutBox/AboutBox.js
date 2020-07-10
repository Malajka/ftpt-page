import React, { useState, createRef } from "react"
import { bool } from "prop-types"
import styled from "styled-components"
import {
  StyledParagraph,
  StyledHeader,
  StyledBox,
  StyledText,
  StyledButton,
  StyledWrapper,
  ModalWrapper,
} from "components/molecules/AboutBox/AboutBox.styled.js"
import Modal from "components/molecules/Modal/Modal.js"
import { StyledHero } from "components/molecules/Hero/Hero.styled.js"
import unified from "unified"
import markdown from "remark-parse"
import html from "remark-html"

const AboutBox = ({ data }) => {
  const [open, setOpen] = useState([
    {
      id: 0,
      isModalOpen: false,
    },
    {
      id: 1,
      isModalOpen: false,
    },
  ])

  const onOpenModal = id => {
    let newArr = [...open]
    console.log(newArr)

    newArr[id].isModalOpen = !newArr[id].isModalOpen

    setOpen(newArr)
  }

  return (
    <div>

      <main>
        {data.nodes.map((item, id) => (
          <>
            {console.log(item.data.img[0].url)}
            <StyledWrapper key={id}>
              <StyledBox img={item.data.img[0].url} />

              <StyledText>
                <StyledHeader>{item.data.title}</StyledHeader>
                <StyledParagraph>{item.data.excerpt}</StyledParagraph>

                <StyledButton onClick={() => onOpenModal(id)}>
                  Czytaj więcej
                </StyledButton>
              </StyledText>
            </StyledWrapper>
            {open[id].isModalOpen && (
              <ModalWrapper>
                <StyledHero />
                <Modal bgImg={item.data.bgImg[0].url}>
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: unified()
                          .use(markdown)
                          .use(html)
                          .processSync(
                            item.data.info.childMarkdownRemark.rawMarkdownBody
                          ),
                      }}
                    />
                    <StyledButton onClick={() => onOpenModal(id)}>
                      ZAMKNIJ
                    </StyledButton>
                  </>
                </Modal>
              </ModalWrapper>
            )}
          </>
        ))}
      </main>
    </div>
  )
}

export default AboutBox
