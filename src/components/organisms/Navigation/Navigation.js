import React, { useState, useRef } from "react"
import { useOnClickOutside } from "hooks/hooks.js"
import BurgerNavigation from "components/molecules/BurgerNavigation/BurgerNavigation"
import Navbar from "components/molecules/Navbar/Navbar"
import Menu from "components/molecules/Menu/Menu.js"

const isMobile = window.innerWidth <= 500

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const node = useRef();
 useOnClickOutside(node, () => setOpen(false))
  return (
    <>
      {isMobile ? (
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
