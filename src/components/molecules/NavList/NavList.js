import React from "react"
import { bool } from "prop-types"
import styled,{css} from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
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

const NavList = () => {
  return (
    <>
      <StyledLink to="/about/">O nas</StyledLink>
      <StyledLink to="/concerts">Koncerty</StyledLink>
      <StyledLink to="/404">Muzyka</StyledLink>
      <StyledLink>Kontakt</StyledLink>
    </>
  )
}
export default NavList
