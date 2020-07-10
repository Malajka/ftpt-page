import styled from "styled-components"

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    width: 45%;
    padding: 20px;
  }
  p {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-top: 1.3rem;
  }
`
export default Box
