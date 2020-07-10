import styled from "styled-components"

// export const StyledWrapper = styled.div`
//          display: flex;
//          flex-wrap: wrap;
//          justify-content: space-between;
//          margin-bottom: 8%;
//        `
export const StyledBox = styled.div`
         width: 48%;
         margin-bottom: 20px;
         background: url(${({ bg }) => bg});
         background-size: cover;
         height: 400px;
         box-shadow: ${({ theme }) => theme.boxShadow};
         border-radius: ${({ theme }) => theme.boxRadius};

         ul {
           text-align: left;
           list-style-type: none;
         }
         &:hover {
           & > div {
             opacity: 1;
           }
         }
       `
export const StyledImg = styled.div`
         position: relative;
         opacity: 0;
         transition: all 0.3s ease-in-out;
         height: 100%;
       `
export const StyledDivider = styled.div`
  position: absolute;
  opacity:0.7;
  width: 70%;
  height: 100%;
  left: 15%;
  top: 0;
  background-color: #ff393f;

`
export const StyledTxtBox = styled.div`
         position: absolute;
         width: 94%;
         height: auto;
         background-color: white;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         text-align: center;
         padding: 25px;
         -webkit-transition: all 0.3s ease-in-out;
         -moz-transition: all 0.3s ease-in-out;
         transition: all 0.3s ease-in-out;
         ul {
           margin-top:-10px;
           li {
             font-size: 1.15rem;
             line-height: 2;
           }
         }
         p {
           line-height: 1.5;
           font-size: 1.6rem;
           text-align: left;
           strong {
             display: block;
             padding-bottom: 10px;
           }
         }
       `
