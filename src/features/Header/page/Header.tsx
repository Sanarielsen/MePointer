import { useState } from "react";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";

import { 
	HeaderActions,
	HeaderContainer 
} from "@features/Header/styles/headerContainer";
import { HeaderNavigator } from "@features/Header/components/HeaderNavigator";
import { HeaderProfile } from "@features/Header/components/HeaderProfile";
import { ThemeSwitch } from "@features/Header/styles/switchTheme";

const label = { inputProps: { 'aria-label': 'Theme Switch' } };

export function HeaderPage() {
	const [darkMode, setDarkMode] = useState(false)
	console.log("Modo claro: ", darkMode)

	return (
		<HeaderContainer>
			<HeaderNavigator />
			<div>MePointer</div>
			<HeaderActions>
				<ThemeSwitch
					{...label}
					checked={darkMode}
					onChange={(e) => setDarkMode(e.target.checked)}
					icon={<MoonIcon />}
  				checkedIcon={<SunIcon />}
				/>
				<HeaderProfile />
			</HeaderActions>
		</HeaderContainer>
	)
}