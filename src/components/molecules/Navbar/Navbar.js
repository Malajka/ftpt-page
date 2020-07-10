 import React from "react"
 import { bool, func } from "prop-types"
 import { graphql, useStaticQuery } from "gatsby"
 import styled from "styled-components"
 import { Link } from "gatsby"
 import NavList from "components/molecules/NavList/NavList"

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.main};
  height: 103px;
  align-items: center;
  padding: 0 5rem;
`
const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 45%;
`

const Logo = styled.img``



 const Navbar = () => {

   const data = useStaticQuery(graphql`
     {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <Logo
          src={data.file.childImageSharp.fluid.src}
          srcSet={data.file.childImageSharp.fluid.srcSet}
          sizes={data.file.childImageSharp.fluid.sizes}
        />
      </Link>
      <StyledNavList><NavList/>
      </StyledNavList >
    </NavWrapper>
  )
}
 export default Navbar
