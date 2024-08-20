import axios from 'axios'
import { Game } from '../types/game'

const API_KEY = '01964fa8-f0e5-40fc-a13b-9f5c3a5415f3'
const BASE_URL = 'https://mock-game-api-9a408f047f23.herokuapp.com/api'

const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		'X-API-Key': API_KEY,
	},
})

export const fetchGames = async (): Promise<Game[]> => {
	const response = await api.get<Game[]>('/games')
	return response.data
}

export const fetchGameDetails = async (gameId: string): Promise<Game> => {
	const response = await api.get<Game>(`/games/${gameId}`)
	return response.data
}
