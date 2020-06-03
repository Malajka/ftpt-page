import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BurgerNavigation from "components/molecules/BurgerNavigation/BurgerNavigation"
import Menu from "components/molecules/Menu/Menu.js"
// import styled from "styled-components"
// import Link from "components/atoms/Link/Link"

// const NavWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   justify-content: space-between;
//   background-color: ${({ theme }) => theme.main};
//   height: 160px;
//   align-items: center;
//   padding: 0 5rem;
// `
// const NavList = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   width: 70%;
// `

// const Logo = styled.img``


const Navigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <BurgerNavigation open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}


export default Navigation




/* // export const Navigation = () => {

//   const data = useStaticQuery(graphql`
//     {
//       file(name: { eq: "logo" }) {
//         childImageSharp {
//           fluid(maxWidth: 130) {
//             src
//       srcSet
//       sizes
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <NavWrapper>
//       <Logo
//         src={data.file.childImageSharp.fluid.src}
//         srcSet={data.file.childImageSharp.fluid.srcSet}
//         sizes={data.file.childImageSharp.fluid.sizes}
//       />
//       <NavList>
//         <Link>O nas</Link>
//         <Link>Koncerty</Link>
//         <Link>Muzyka</Link>
//         <Link>Kontakt</Link>
//       </NavList>
//     </NavWrapper>
//   )
// } */
