import styled from "styled-components";

export const HeaderContainer = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  background-color: ${(props) => props.theme.colors["primary-dark"]};
  color: ${(props) => props.theme.colors["base-dark"]};

  width: 100%;
  height: 8vh;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
  }

  button:hover, button:focus, button:active {
    background: none;
    border: none;
  }
`
