import { Image, Text, View } from "react-native";
import SmolderBaseLayout from "./SmolderBaseLayout";
import SmolderTabBar from "./SmolderTabBar";

export default function SmolderHome(): JSX.Element {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
		<Text>hello</Text>
			<Image source={require('./assets/burn.png')} />
		</View>
	)
}
