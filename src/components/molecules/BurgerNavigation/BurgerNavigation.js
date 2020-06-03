import React from "react"
import { bool, func } from "prop-types"
import { StyledBurgerNavigation } from "components/molecules/BurgerNavigation/BurgerNavigation.styled.js"




const BurgerNavigation = ({open,setOpen}) => {
  return (
    <StyledBurgerNavigation open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurgerNavigation>
  )
}

BurgerNavigation.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default BurgerNavigation
