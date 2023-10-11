import { View } from "react-native"
import SmolderHeader from "./SmolderHeader"
import SmolderTabBar from "./SmolderTabBar"

export interface BaseLayoutProps {
	child: JSX.Element
}
export default function SmolderBaseLayout({ child }: BaseLayoutProps): JSX.Element {
	return (
		<View>
			{child}
			<SmolderTabBar/>
		</View>
	)
}