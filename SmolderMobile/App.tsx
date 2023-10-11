import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { AppRegistry, Image, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { displayName as appName } from './app.json';
import SmolderCloud from './components/SmolderCloud';
import SmolderContacts from './components/SmolderContacts';
import SmolderDeets from './components/SmolderDeets';
import SmolderHome from './components/SmolderHome';
import SmolderSettings from './components/SmolderSettings';
import SmolderTabBar from './components/SmolderTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						switch (route.name) {
							case 'Smolder': {
								return focused
									? <Image style={{ width: size, height: size }} source={require('./components/assets/burn.png')} />
									: <Image style={{ width: size, height: size }} source={require('./components/assets/burn_outline.png')} />;
							}
							case 'Events': {
								return focused
									? <Image style={{width: size, height: size}} source={require('./components/assets/camp.png')} />
									: <Image style={{ width: size, height: size }} source={require('./components/assets/camp_outline.png')} />;
							}
							case 'People': {
								return focused
									? <Image style={{ width: size, height: size }} source={require('./components/assets/burner.png')} />
									: <Image style={{ width: size, height: size }} source={require('./components/assets/burner_outline.png')} />;
							}
							case 'Online': {
								return focused
									? <Image style={{ width: size, height: size }} source={require('./components/assets/cloud.png')} />
									: <Image style={{ width: size, height: size }} source={require('./components/assets/cloud_outline.png')} />;
							}
							case 'Settings': {
								return focused
									? <Image style={{ width: size, height: size }} source={require('./components/assets/wheel.png')} />
									: <Image style={{ width: size, height: size }} source={require('./components/assets/wheel_outline.png')} />;
							}
						}
					}
				})}>
				<Tab.Screen name="Smolder" component={SmolderHome} />
				<Tab.Screen name="Events" component={SmolderDeets} />
				<Tab.Screen name="People" component={SmolderContacts} />
				<Tab.Screen name="Online" component={SmolderCloud} />
				<Tab.Screen name="Settings" component={SmolderSettings} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}