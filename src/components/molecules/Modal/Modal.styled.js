import styled, { keyframes } from "styled-components"



const openModal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 1;
    transform: translateY(8%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
export const StyledModal = styled.div`
         top: 15%;
         left: 0;
         right: 0;
         margin: 0 auto;
         width: 90vw;
         height: calc(100% - 150px);
         padding: 4rem;
         position: absolute;
         z-index: 200;
         /* background: #ffffff; */
         background: url(${({ bgImg }) => bgImg});
         box-shadow: 3px -4px 5px $blue, 0px 20px 13px $blue;
         transition: 4s ease;
         animation: ${openModal} 1s ease-out forwards;
         p {
           font-size: 2.3rem;
           line-height: 1.6;
         }
         button {
           right: 0;
           position: absolute;
         }
       `
