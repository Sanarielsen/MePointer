import { HeaderContainer } from "@features/Header/styles/headerContainer";
import { ListBulletsIcon, UserCircleIcon } from "@phosphor-icons/react/dist/ssr";

export function Header() {
	return (
		<HeaderContainer>
			<button
				type="button"
				onClick={() => console.log("Clicou")}
			> 
				<ListBulletsIcon size={42} />
			</button>
			<div>MePointer</div>
			<button
				type="button"
				onClick={() => console.log("Clicou")}
			> 
				{/*
					Usar esse icone quando o usuario nao estiver conectado
				 <UserCircleDashedIcon size={42} /> 
				*/}
				<UserCircleIcon size={42} />
			</button>
		</HeaderContainer>
	)
}