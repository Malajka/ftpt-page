import styled, { css } from "styled-components"

const MainLink = styled.a`
  color: ${({ theme }) => theme.primaryLight};
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Poiret One", cursive;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: white;
    `};
`
export default MainLink

// /* background-color: ${({  theme }) =>
//     'red' ? theme.zen : theme.web}; *
