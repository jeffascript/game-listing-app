// src/store/gameStore.ts

import { create } from 'zustand'
import { GameStore, Game } from '@/types/game'
import { fetchGames, fetchGameDetails } from '@/api/gameApi'

export const useGameStore = create<GameStore>((set, get) => ({
	games: [],
	favorites: [],
	loading: false,
	error: null,

	fetchGames: async () => {
		set({ loading: true, error: null })
		try {
			const games = await fetchGames()
			set({ games, loading: false })
		} catch (error) {
			set({ error: (error as Error).message, loading: false })
		}
	},

	fetchGameDetails: async (gameId: string) => {
		set({ loading: true, error: null })
		try {
			const game = await fetchGameDetails(gameId)
			set((state) => ({
				games: state.games.map((g) => (g.id === game.id ? game : g)),
				loading: false,
			}))
			return game
		} catch (error) {
			set({ error: (error as Error).message, loading: false })
			throw error
		}
	},

	toggleFavorite: (game: Game) => {
		set((state) => {
			const isFavorite = state.favorites.some((fav) => fav.id === game.id)
			return {
				favorites: isFavorite
					? state.favorites.filter((fav) => fav.id !== game.id)
					: [...state.favorites, game],
			}
		})
	},
}))
