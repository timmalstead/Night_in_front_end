import styled from "styled-components"

const FormStyle = styled.form`
  width: 60%;
  display: flex;
  justify-content: space-evenly;

  button,
  select {
    background-color: #383838;
    border: none;
    color: #979797;
    min-width: 70%;
    font-size: 1.3em;
    font-weight: 700;
    outline: none;
    border-radius: 0.25em;
    text-align: center;
  }

  button {
    min-width: 40%;
    color: #979797;
    text-align: center;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 50% button, select {
      min-width: 30%;
    }
  }

  @media (max-width: 900px) {
    width: 45% button, select {
      min-width: 30%;
    }
  }
`

export { FormStyle }
