import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import GamesScreen from './src/screens/GamesScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
import GameDetailsScreen from './src/screens/GameDetailsScreen'
import { RootStackParamList, BottomTabParamList } from '@/types/game'

const Tab = createBottomTabNavigator<BottomTabParamList>()
const Stack = createStackNavigator<RootStackParamList>()

const GamesStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="GamesList" component={GamesScreen} options={{ title: 'Games' }} />
		<Stack.Screen
			name="GameDetails"
			component={GameDetailsScreen}
			options={{ title: 'Game Details' }}
		/>
	</Stack.Navigator>
)

const FavoritesStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="FavoritesList"
			component={FavoritesScreen}
			options={{ title: 'Favorites' }}
		/>
		<Stack.Screen
			name="GameDetails"
			component={GameDetailsScreen}
			options={{ title: 'Game Details' }}
		/>
	</Stack.Navigator>
)

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName: 'game-controller' | 'game-controller-outline' | 'heart' | 'heart-outline'

						if (route.name === 'Games') {
							iconName = focused ? 'game-controller' : 'game-controller-outline'
						} else if (route.name === 'Favorites') {
							iconName = focused ? 'heart' : 'heart-outline'
						}

						return <Ionicons name={iconName} size={size} color={color} />
					},
				})}
			>
				<Tab.Screen name="Games" component={GamesStack} options={{ headerShown: false }} />
				<Tab.Screen name="Favorites" component={FavoritesStack} options={{ headerShown: false }} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App
