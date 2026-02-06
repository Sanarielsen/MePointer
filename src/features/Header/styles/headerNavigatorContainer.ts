import styled from "styled-components";

export const SideMenu = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
`;

export const SideMenuNavigation = styled.nav`

  padding: 2rem;
  height: 100%;
  width: 250px;
  background-color: ${(props) => props.theme.colors["background"]};
  text-align: center;

  svg {
    color: ${(props) => props.theme.colors["base"]};
    padding-bottom: 1rem;
  }
`;

export const SideMenuItem = styled.li`

  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors["background"]};
  width: 100%;
  padding: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors["primary"]};

    a {
      color: ${(props) => props.theme.colors["base-hover"]};
    }
  }
`;

export const MenuOption = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors["base"]};
`;