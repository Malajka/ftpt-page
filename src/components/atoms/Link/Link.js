import styled, { css } from "styled-components"

const Link = styled.a`
  color: ${({ theme }) => theme.primaryLight};
  text-transform: uppercase;
  font-size:2rem;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: white;
    `};
`
export default Link

// /* background-color: ${({  theme }) =>
//     'red' ? theme.zen : theme.web}; *
