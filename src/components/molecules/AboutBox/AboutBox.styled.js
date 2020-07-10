import styled, {css} from "styled-components"
import Paragraph from "components/atoms/Paragraph/Paragraph.js"
import Button from "components/atoms/Button/Button.js"
import Header from "components/atoms/Header/Header.js"


export const StyledAboutBox = styled.div`

  /* button {
    text-transform: uppercase;
    color: pink;
  } */
${({ band, src }) =>
    band &&
    css`
      /* background-image: url(${({ src }) => src}); */
`}

`
export const StyledParagraph = styled(Paragraph)`
  color: #000000;
  max-height: 80px;
  line-height: 1.6;
  overflow: hidden;
`
export const StyledHeader = styled(Header)`
  color: #000000;
  font-size: 3rem;
  padding: 1rem;
  margin: 1rem 2rem;
  line-height: 1;
`

export const StyledBox = styled.div`
  background-image: url(${({ img }) => img});
  background-position: 50% 17%;

  background-repeat: no-repeat;
  background-size: cover;

  max-height: 100%;
  transition: transform 0.7s ease-in-out;
  width: 100%;
  width: 30%;
  /* object-fit: cover; */
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
`
export const StyledText = styled.div`
  padding-left: 10%;
  width: 70%;
  text-align: right;
`
export const StyledButton = styled(Button)`
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

  border-right: none;
`

export const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  display: flex;
  justify-content: center;
  z-index: 2;

  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  background: white;
  min-height: 35vh;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.boxRadius};
  &:hover {
    > div {
      &:first-of-type {
        transform: scale(1.1);

        &:after {
          opacity: 0.2;
        }
      }
    }
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
export const ModalWrapper = styled.div`
  background: url(${({ bgImg }) => bgImg});
`
