import { useState } from "react";
import type { FocusEvent } from "react";

import { 
  GearIcon, 
  PaintBrushHouseholdIcon, 
  SignOutIcon, 
  UserCircleDashedIcon, 
  UserCircleIcon, 
  UserIcon, 
} from "@phosphor-icons/react/dist/ssr";

import { 
  DropdownItem, 
  HeaderProfileContainer, 
  ProfileDropdown 
} from "@features/Header/styles/headerProfileContainer";

export function HeaderProfile() {

  const [isOpen, setIsOpen] = useState(false);
  //TODO: Implement authentication logic to determine if the user is logged in
  const isLoggedIn = true;

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <HeaderProfileContainer onBlur={handleBlur} onClick={() => setIsOpen(true)}>
      <button
        type="button"
      >
        { isLoggedIn ? (
          <UserCircleIcon size={42} />
        ) : (
          <UserCircleDashedIcon size={42} />
        ) }        
      </button>

      { isLoggedIn && isOpen && (
        <ProfileDropdown
          id="profile-dropdown" 
          role="profile-control" 
          aria-label="Dropdown Menu" 
          aria-expanded={isOpen} 
          onMouseDown={(e) => e.preventDefault()}  
        >
          <ul style={{ listStyle: 'none' }}>
            <DropdownItem>
              <UserIcon size={16} />Profile
            </DropdownItem>
            <DropdownItem>
              <PaintBrushHouseholdIcon size={16} />Theme
            </DropdownItem>
            <DropdownItem>
              <GearIcon size={16} />Settings
            </DropdownItem>
            <DropdownItem>
              <SignOutIcon size={16} />Log out
            </DropdownItem>
          </ul>
        </ProfileDropdown>
      )  }
    </HeaderProfileContainer>
  )
}