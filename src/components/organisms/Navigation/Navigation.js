import React, { useState, useRef } from "react"
import { useOnClickOutside } from "hooks/hooks.js"
import BurgerNavigation from "components/molecules/BurgerNavigation/BurgerNavigation"
import Navbar from "components/molecules/Navbar/Navbar"
import Menu from "components/molecules/Menu/Menu.js"
import { useMediaQuery } from "react-responsive"

const isMobile = window.innerWidth <= 500

const Navigation = () => {
   const isDesktopOrLaptop = useMediaQuery({
     query: "(max-device-width: 500px)",
   })
  const [open, setOpen] = useState(false)
  const node = useRef();
 useOnClickOutside(node, () => setOpen(false))
  return (
    <>
      {isDesktopOrLaptop ? (
        <div ref={node}>
          <BurgerNavigation open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      ) : (
        <Navbar />
      )}
    </>
  )
}

export default Navigation
