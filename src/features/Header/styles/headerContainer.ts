import styled from "styled-components";

export const HeaderContainer = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors["primary"]};
  color: ${(props) => props.theme.colors["base"]};
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
`;

