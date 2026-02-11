import { useState } from "react";

import { ListBulletsIcon } from "@phosphor-icons/react";

import { 
  MenuOption, 
  SideMenu,
  SideMenuItem,
  SideMenuNavigation 
} from "@features/Header/styles/headerNavigatorContainer";

export function HeaderNavigator() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <button
      type="button"
      onClick={() => setIsMenuOpen(true)}
    > 
      <ListBulletsIcon size={42} />
    </button>

    { isMenuOpen && ( 
      <SideMenu 
        id="side-menu" 
        role="navigation" 
        aria-label="Side Menu" 
        aria-expanded={isMenuOpen} 
        onClick={() => setIsMenuOpen(false)}
      >	
        <SideMenuNavigation onClick={(e) => e.stopPropagation()}>

          <ListBulletsIcon size={42} />

          <ul>
            <SideMenuItem>
              <MenuOption href="/" style={{ textDecoration: 'none' }}>Home</MenuOption>
            </SideMenuItem>
            <SideMenuItem>
              <MenuOption href="/" style={{ textDecoration: 'none' }}>Historic</MenuOption>
            </SideMenuItem>
          </ul>
        </SideMenuNavigation>
      </SideMenu>
    )}
    </>
  )
}