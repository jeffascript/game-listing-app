import axios, { AxiosError } from 'axios'
import { Game } from '@/types/game'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://mock-game-api-9a408f047f23.herokuapp.com/api'

const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		'X-API-Key': API_KEY,
	},
})

const handleApiError = (error: AxiosError): never => {
	if (error.response) {
		throw new Error(`API error: ${error.response.status} - ${error.response.data}`)
	} else if (error.request) {
		throw new Error('No response received from the server')
	} else {
		throw new Error(`Error setting up the request: ${error.message}`)
	}
}

export const fetchGames = async (): Promise<Game[]> => {
	try {
		const response = await api.get<Game[]>('/games')
		return response.data
	} catch (error) {
		return handleApiError(error as AxiosError)
	}
}

export const fetchGameDetails = async (gameId: string): Promise<Game> => {
	try {
		const response = await api.get<Game>(`/games/${gameId}`)
		return response.data
	} catch (error) {
		return handleApiError(error as AxiosError)
	}
}
