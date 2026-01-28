import { Outlet } from "react-router-dom";

import { Header } from "@features/Header/components/Header";
import { LayoutContainer } from "@styles/LayoutContainer";

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
		</LayoutContainer>
	)
}