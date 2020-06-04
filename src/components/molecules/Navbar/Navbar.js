 import React from "react"
 import { bool, func } from "prop-types"
 import { graphql, useStaticQuery } from "gatsby"
 import styled from "styled-components"
 import { Link } from "gatsby"
// import Link from "components/atoms/Link/Link"

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.main};
  height: 103px;
  align-items: center;
  padding: 0 5rem;
`
const NavList = styled.ul`
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
      <Logo
        src={data.file.childImageSharp.fluid.src}
        srcSet={data.file.childImageSharp.fluid.srcSet}
        sizes={data.file.childImageSharp.fluid.sizes}
      />
      <NavList>
        <Link to="/about/" >O nas</Link>
        <Link to="/404">Koncerty</Link>
        <Link>Muzyka</Link>
        <Link>Kontakt</Link>
      </NavList>
    </NavWrapper>
  )
}
 export default Navbar
