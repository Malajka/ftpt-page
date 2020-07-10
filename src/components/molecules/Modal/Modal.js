import React from "react"
import { bool } from "prop-types"
// import { StyledModal } from "components/molecules/Modal/Modal.styled.js"
import Button from "components/atoms/Button/Button.js"
import styled from "styled-components"

// const StyledLink = styled(Link)`
//   color: ${({ theme }) => theme.primaryLight};
//   text-transform: uppercase;
//   font-size: 2rem;
//   font-family: "Poiret One", cursive;

//   ${({ secondary }) =>
//     secondary &&
//     css`
//       background-color: white;
//     `};
// `
const StyledModal = styled.div`
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 95vw;
  height: 88vh;
   padding: 2rem 5rem;
  position: absolute;
  z-index: 200;
  background: #ffffff;
   background: url(${({ bgImg }) => bgImg});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-color: #d5d5d7;
  box-shadow: 3px -4px 5px $blue, 0px 20px 13px $blue;
  transition: 4s ease;

  p {
    font-size: 1.9rem;
    line-height: 1.5;
    width: 95%;
  }
  button {
    right: 0;
    bottom: 5%;
    position: absolute;
  }
`


const Modal = ({ children, bgImg }) => {
  return <StyledModal bgImg={bgImg}>{children}</StyledModal>
}
export default Modal
  /* animation: ${openModal} 1s ease-out forwards; */
