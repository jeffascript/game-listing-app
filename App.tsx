import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GamesScreen from './src/screens/GamesScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'

const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Games" component={GamesScreen} />
				<Tab.Screen name="Favorites" component={FavoritesScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
