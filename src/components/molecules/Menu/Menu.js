import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "components/molecules/Menu/Menu.styled.js"
import Link from "components/atoms/Link/Link"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link>About us</Link>
      <Link href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </Link>
      <Link href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
