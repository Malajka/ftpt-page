import styled, { css } from "styled-components"

const Button = styled.button`
  color: ${({ theme }) => theme.primaryLight};
  text-transform: uppercase;
  font-size: 2rem;
  padding: 3rem;

  ${({ hero }) =>
    hero &&
    css`
      background-color: ${({ theme }) => theme.red};
       opacity:0.7;

      &:hover{
          border:1.3px solid ;
          border-color: ${({ theme }) => theme.yellow};
          opacity:0.8;
      }
    `};
`
export default Button
