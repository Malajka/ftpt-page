import React, { useState, createRef } from "react"
import { bool } from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Button from "components/atoms/Button/Button.js"
import Header from "components/atoms/Header/Header.js"
import Paragraph from "components/atoms/Paragraph/Paragraph.js"
import { StyledInfoBox } from "components/molecules/InfoBox/InfoBox.styled.js"
import Modal from "components/molecules/Modal/Modal.js"
import { StyledHero } from "components/molecules/Hero/Hero.styled.js"

// const breatheAnimation = keyframes`
//  0% {  width:60vw; }
//  /* 30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; } */
//  100% { transform: width:100vw;  }
// `
// #cc2025;
const StyledParagraph = styled(Paragraph)`
  color: #000000;
  max-height: 80px;
  /* max-width: 50%; */
  line-height: 1.6;
  overflow: hidden;
`
const StyledHeader = styled(Header)`
  color: #000000;
  font-size: 3rem;
  padding: 1rem;
  margin: 1rem 2rem;
  line-height: 1;
`

const StyledBox = styled.div`
  background-image: url(${({ img }) => img});
  background-position: 50% 17%;
  /* background-position: center center; */
  background-repeat: no-repeat;
  background-size: cover;
  /* max-width: 300px; */
  max-height: 100%;
  transition: transform 0.7s ease-in-out;
  width: 100%;
  width: 30%;
  object-fit: cover;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-191deg, #ce1515b8, transparent 101%);
    opacity: 0.5;
  }

  &:before {
    /* content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ce1515b8;
    opacity: 0.6; */

    /* transition: opacity 0.8s ease-in-out; */
  }

  /* &:hover {
    &:before {
      opacity: 0;
    }
  } */
`
const StyledText = styled.div`
  padding-left: 10%;
  width: 70%;
  text-align: right;
`
const StyledButton = styled(Button)`
  color: #effffa;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 3rem;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 2.2rem 3.8rem;
  border-radius: 10px 0px 0 0px;
  color: white;
  background: black;
  background: linear-gradient(#555, #000 30%);
  box-shadow: 0 2px -1px #ccc, inset 0px 0px 0px 1px rgba(220, 220, 220, 0.2);
  border: solid #000;
  border-width: 4px 8px 12px;
  border-left-color: #424546;
  border-bottom-color: #121516;
  /* border-right-color: transprent; */
  border-right: none;
`

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  display: flex;
  justify-content: center;
  /* background-color: #07060a;
  background-color: #000000; */
  z-index: 2;
  /* box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66); */
  border-radius: 10px;
  /* border-radius: 10px 10px 0 10px; */
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  background: white;
  min-height: 35vh;
  box-shadow: 0px 0px 25px -1px #cc202559;
  &:hover {
    > div {
      &:first-of-type {
        transform: scale(1.1);

        &:after {
          opacity: 0.2;
        }
      }
    }
    /* &:before {
      /* transform: scale(1.2); */
  }
  &:after {
    content: "";
  }
  &:last-of-type {
    /* flex-direction: row-reverse; */
    /* button {
      left: 0;
      border-radius: 0px 10px 10px 0px;
    } */

    /* &:before {
      left: 69%;
    } */
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    background: #07060a;
    background: #ffffff;
    top: -20%;
    height: 130%;
    width: 10%;
    left: 28%;
    transform: rotate(9deg);
    display: flex;
    justify-content: flex-end;
    z-index: 2;
    filter: blur(2px);
  }
`
const ModalWrapper = styled.div`
  background: url(${({ bgImg }) => bgImg});
`
const InfoBox = ({ data }) => {
  // const initialValue = [
  //   { id: 0, value: " --- Select a State ---" }];
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
  // const inputEl = createRef()

  // const focusInput = inputEl => inputEl.current.setOpen(!open)
  const onOpenModal = id => {
    let newArr = [...open]
    console.log(newArr)

    newArr[id].isModalOpen = !newArr[id].isModalOpen
    //  const newElement = {
    //    id,
    //    isModalOpen: true,
    //  }
    setOpen(newArr)
    // const newItemsList = itemsList.filter(item => item.id !== id)

    // setItemsList(newItemsList)
  }
  // newArr[id] = !open.isModalOpen

  // setOpen(newArr)} // ??

  // const list = open.filter(item => item.id !== id);
  //  setOpen(!open)

  return (
    <div>
      {data.allDatoCmsAbout.edges.map((item, id) => (
        <>
          <StyledWrapper key={id}>
            <StyledBox img={item.node.image.url} />

            <StyledText>
              <StyledHeader>{item.node.title}</StyledHeader>
              <StyledParagraph>{item.node.excerpt}</StyledParagraph>

              <StyledButton onClick={() => onOpenModal(id)}>
                Czytaj więcej
              </StyledButton>
            </StyledText>
          </StyledWrapper>
          {open[id].isModalOpen && (
            <ModalWrapper>
              <StyledHero />
              <Modal bgImg={item.node.paragraphImg.url}>
                <>
                  <p>{item.node.paragraph}</p>
                  <StyledButton onClick={() => onOpenModal(id)}>
                    ZAMKNIJ
                  </StyledButton>
                </>
              </Modal>
            </ModalWrapper>
          )}
        </>
      ))}
    </div>
  )
}

export default InfoBox

/* {data.datoCmsTest.test1.map(block => (
        <div>
          {block.model.apiKey === "test2" && <div>{block.test3}</div>}
          {block.model.apiKey === "test4" && <img src={block.test5.url} />}
        </div>
      ))} */
/* // onClick={this.lol}
/* animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite; */

/* position: absolute; */
/* left: 86%;
  bottom: 29%;
  border-radius: 10px 0px 0 0px;
  color: white;
  background: black; */
// text-transform: uppercase;
//   font-size: 2rem;
//   padding: 3rem;
//   /* left: 86%; */
//   /* bottom: -3%; */
//   border-radius: 10px 0px 0 0px;
//   color: white;
//   background: black;
//   background: linear-gradient(#555, #000 30%);
//   box-shadow: 0 2px -1px #ccc, inset 0px 0px 0px 1px rgba(220, 220, 220, 0.2);
//   /* width: calc(600px / 7 - 50% - 16px); */
//   /* height: calc(400px - 35%); */
//   border: solid #000;
//   border-width: 0 10px 1px;
//   border-left-color: #424546;
//   border-bottom-color: #121516;
//   border-right-color: transprent;
//   border-right: none;
