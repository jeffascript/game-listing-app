import { API_KEY, BASE_URL } from '@env'

if (!API_KEY || !BASE_URL) {
	throw new Error('Missing required environment variables. Check your .env file.')
}

export const config = {
	API_KEY,
	BASE_URL,
}
