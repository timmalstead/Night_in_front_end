import styled from "styled-components"

const RenderStyle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1;

  .movie-holder {
    display: inherit;
    align-items: inherit;
    flex-direction: inherit;
    justify-content: flex-end;
    width: inherit;
    height: inherit;
  }

  a {
    display: inherit;
    align-items: inherit;
    flex-direction: inherit;
    justify-content: flex-start;
    width: 70%;
    height: inherit;
  }

  img {
    max-height: 120%;
    min-height: 100%;
    margin: 1em 0 0 0;
    border-radius: 1em;
  }

  details {
    max-width: 80%;
    text-align: center;
  }

  summary {
    outline: none;
  }
  h2 {
    margin: 1.5em 0 0.5em 0;
    text-align: center;
  }

  h3 {
    margin: 0.5em 0 2em 0;
    text-align: center;
    justify-self: flex-end;
  }
`

export default RenderStyle
