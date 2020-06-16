import styled, {css} from "styled-components"


export const StyledInfoBox = styled.div`

  /* button {
    text-transform: uppercase;
    color: pink;
  } */
${({ band, src }) =>
    band &&
    css`
      background-image: url(${({ src }) => src});
`}

`

