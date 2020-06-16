import styled, { css } from "styled-components"

const Paragraph = styled.h2`
  color: ${({ theme }) => theme.primaryLight};
  text-transform: uppercase;
  font-size: 1.6rem;
  padding: 3rem;
  font-family: "Poiret One", cursive;
  letter-spacing: 1px;

  ${({ hero }) =>
    hero &&
    css`
      color: red;
    `};
`;
export default Paragraph
