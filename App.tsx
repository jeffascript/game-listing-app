import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import GamesScreen from '@/screens/GamesScreen'
import FavoritesScreen from '@/screens/FavoritesScreen'
import GameDetailsScreen from '@/screens/GameDetailsScreen'
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
						const iconName = route.name === 'Games' ? 'game-controller' : 'heart'
						const iconVariant = focused ? '' : '-outline'

						return <Ionicons name={`${iconName}${iconVariant}`} size={size} color={color} />
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
