export interface Game {
	id: string
	title: string
	iconURL: string
	bannerURL: string
	rating: number
	description: string
}

export interface GameState {
	games: Game[]
	favorites: Game[]
	loading: boolean
	error: string | null
}

export interface GameActions {
	fetchGames: () => Promise<void>
	fetchGameDetails: (gameId: string) => Promise<Game>
	toggleFavorite: (game: Game) => void
}

export type GameStore = GameState & GameActions

export type RootStackParamList = {
	GamesList: undefined
	FavoritesList: undefined
	GameDetails: { gameId: string }
}

export type BottomTabParamList = {
	Games: undefined
	Favorites: undefined
}

export type StackParamList = {
	List: undefined
	GameDetails: { gameId: string }
}

export interface GameCardProps {
	game: Game
	onPress: () => void
}

export interface GameDetailsScreenProps {
	route: {
		params: {
			gameId: string
		}
	}
	navigation: GameDetailsScreenNavigationProp
}

import { StackNavigationProp } from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'

export type ScreenNavigationProp = StackNavigationProp<StackParamList, 'List'>
export type GameDetailsScreenNavigationProp = StackNavigationProp<StackParamList, 'GameDetails'>
export type TabNavigationProp = BottomTabNavigationProp<BottomTabParamList>

export interface GamesScreenProps {
	navigation: ScreenNavigationProp
	route: RouteProp<RootStackParamList, 'GamesList'>
}
