import { create } from 'zustand'
import { Game } from '@/types/game'
import { fetchGames, fetchGameDetails } from '@/api/gameApi'

interface GameState {
	games: Game[]
	favorites: Game[]
	loading: boolean
	error: string | null
	fetchGames: () => Promise<void>
	fetchGameDetails: (gameId: string) => Promise<Game>
	toggleFavorite: (game: Game) => void
}

export const useGameStore = create<GameState>((set, get) => ({
	games: [],
	favorites: [],
	loading: false,
	error: null,
	fetchGames: async () => {
		set({ loading: true, error: null })
		try {
			const games = await fetchGames()
			console.log(JSON.stringify(games, null, 2))
			set({ games, loading: false })
		} catch (error) {
			set({ error: (error as Error).message, loading: false })
		}
	},
	fetchGameDetails: async (gameId: string) => {
		set({ loading: true, error: null })
		try {
			const game = await fetchGameDetails(gameId)
			console.log(JSON.stringify(game, null, 2))
			set({ loading: false })
			return game
		} catch (error) {
			set({ error: (error as Error).message, loading: false })
			throw error
		}
	},
	toggleFavorite: (game: Game) => {
		set((state) => {
			const isFavorite = state.favorites.some((fav) => fav.id === game.id)
			if (isFavorite) {
				return { favorites: state.favorites.filter((fav) => fav.id !== game.id) }
			} else {
				return { favorites: [...state.favorites, game] }
			}
		})
	},
}))
