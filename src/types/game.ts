export interface Game {
	id: string
	title: string
	description: string
	icon: string
	banner: string
	rating: number
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
