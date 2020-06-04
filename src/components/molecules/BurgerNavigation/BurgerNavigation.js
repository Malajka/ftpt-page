import React from "react"
import { bool, func } from "prop-types"
import { StyledBurgerNavigation } from "./BurgerNavigation.styled"

const BurgerNavigation = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false

  return (
    <StyledBurgerNavigation
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurgerNavigation>
  )
}

BurgerNavigation.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default BurgerNavigation


