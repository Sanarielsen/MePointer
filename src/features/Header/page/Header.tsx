import { HeaderNavigator } from "@features/Header/components/HeaderNavigator";
import { HeaderProfile } from "@features/Header/components/HeaderProfile";
import { HeaderContainer } from "@features/Header/styles/headerContainer";

export function HeaderPage() {
	return (
		<HeaderContainer>
			<HeaderNavigator />
			<div>MePointer</div>
			<HeaderProfile />
		</HeaderContainer>
	)
}