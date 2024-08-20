import axios, { AxiosError } from 'axios'
import { Game } from '@/types/game'
import { config } from '@/config/config'

const api = axios.create({
	baseURL: config.BASE_URL,
	headers: {
		'X-API-Key': config.API_KEY,
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
