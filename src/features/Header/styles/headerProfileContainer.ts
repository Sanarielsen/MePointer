import styled from "styled-components";

export const HeaderProfileContainer = styled.div`
  position: relative;
`;

export const ProfileDropdown = styled.nav`
  position: absolute;
  top: 9vh;
  left: -300%;
  background-color: ${ (props) => props.theme.colors["primary"] };

  padding: 2rem;

  border-radius: 8px;
`;

export const DropdownItem = styled.li`

  display: flex;
  justify-content: center;

  gap: 0.5rem;

  padding: 0.5rem;
  color: ${ (props) => props.theme.colors["base"] };

  cursor: pointer;

  &:hover {
    color: ${ props => props.theme.colors["base-hover"] };
  }
`;