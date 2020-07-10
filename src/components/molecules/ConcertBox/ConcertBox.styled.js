import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 8%;
`
export const StyledBox = styled.div`
display:flex;
display: flex;
background: #000;
border-radius: ${({ theme }) => theme.boxRadius};
width:100%;
img{
     align-self: end;
  padding:20px;
}
>div{

  div{
      width:100%;
       display:flex;
      flex-wrap:wrap;
      align-items: center;
      img{
            max-width: 70px;
            align-self: center;
      }
  }
}
  p,a{
    color:#fff;
        padding: 1rem;
    span{
      padding-left:10px;
    }
}
         /* width: 48%;
         margin-bottom: 20px;
         background: url(${({ bg }) => bg});
         background-size: cover;
         height: 400px;
         box-shadow: ${({ theme }) => theme.boxShadow}; */



       `

// export const StyledTxtBox = styled.div`
//   position: absolute;
//   width: 94%;
//   height: auto;
//   background-color: white;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   padding: 25px;
//   -webkit-transition: all 0.3s ease-in-out;
//   -moz-transition: all 0.3s ease-in-out;
//   transition: all 0.3s ease-in-out;
//   ul {
//     margin-top: -10px;
//     li {
//       font-size: 1.15rem;
//       line-height: 2;
//     }
//   }
//   p {
//     line-height: 1.5;
//     font-size: 1.6rem;
//     text-align: left;
//     strong {
//       display: block;
//       padding-bottom: 10px;
//     }
//   }
// `
// export const Poster = styled.div`
//   background: url(${({ bg }) => bg});
//   background-size: contain;
//   background-repeat: no-repeat;
//   width: 30%;
// `
