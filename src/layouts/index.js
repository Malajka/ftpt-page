import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import MainStyles from "theme/MainStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "theme/Maintheme.js"
import Navigation  from "components/organisms/Navigation/Navigation"


const MainWrapper = styled.div`
  padding: 0 5rem;
`
const isMobile = window.innerWidth <= 500

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Navigation/>
       <MainWrapper>
        <MainStyles />
        {children}
      </MainWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
{
  /* <Menu open={open} setOpen={setOpen} /> */
}
      {/* <Navigation /> */}
