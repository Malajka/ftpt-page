import styled, { css } from "styled-components"

const Header = styled.h2`
  /* color: ${({ theme }) => theme.primaryLight}; */
  text-transform: uppercase;
  font-size: 3.4rem;
  padding: 3rem;
  font-family: "Poiret One", cursive;
  letter-spacing: 1px;
  ${({ hero }) =>
    hero &&
    css`
      color: red;
    `};
  ${({ title }) =>
    title &&
    css`
      text-align: center;
    `};

     ${({ concert }) =>
       concert &&
       css`
         color: #fff;
       `};
`
export default Header
