import { Outlet } from "react-router-dom";

import { HeaderPage } from "@features/Header/page/Header";
import { LayoutContainer } from "@styles/LayoutContainer";

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<HeaderPage />
			<Outlet />
		</LayoutContainer>
	)
}