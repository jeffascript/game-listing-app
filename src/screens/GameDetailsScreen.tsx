import React, { useEffect, useState } from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native'
import { useGameStore } from '@/store/gameStore'
import { Game, GameDetailsScreenProps } from '@/types/game'

const GameDetailsScreen = ({ route }: GameDetailsScreenProps) => {
	const { gameId } = route.params
	const { fetchGameDetails, toggleFavorite, favorites } = useGameStore()
	const [game, setGame] = useState<Game | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadGameDetails = async () => {
			try {
				setLoading(true)
				const gameDetails = await fetchGameDetails(gameId)
				setGame(gameDetails)
			} catch (err) {
				setError('Failed to load game details. Please try again.')
			} finally {
				setLoading(false)
			}
		}

		loadGameDetails()
	}, [gameId, fetchGameDetails])

	if (loading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		)
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text style={styles.errorText}>{error}</Text>
			</View>
		)
	}

	if (!game) {
		return (
			<View style={styles.centered}>
				<Text>No game details found.</Text>
			</View>
		)
	}

	const isFavorite = favorites.some((fav) => fav.id === game.id)

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: game.bannerURL }} style={styles.banner} />
			<View style={styles.content}>
				<Image source={{ uri: game.iconURL }} style={styles.icon} />
				<Text style={styles.title}>{game.title}</Text>
				<Text style={styles.rating}>Rating: {game.rating}/5</Text>
				<TouchableOpacity
					style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
					onPress={() => toggleFavorite(game)}
				>
					<Text style={styles.favoriteButtonText}>
						{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
					</Text>
				</TouchableOpacity>
				<Text style={styles.description}>{game.description}</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
		fontSize: 16,
		textAlign: 'center',
	},
	banner: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},
	content: {
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	icon: {
		marginBottom: 16,

		alignSelf: 'center',
		width: 80,
		height: 80,
		borderRadius: 40,
		marginTop: -50,
		backgroundColor: '#fff',
	},
	rating: {
		fontSize: 18,
		marginBottom: 16,
	},
	favoriteButton: {
		backgroundColor: '#007AFF',
		padding: 12,
		borderRadius: 8,
		alignItems: 'center',
		marginBottom: 16,
	},
	favoriteButtonActive: {
		backgroundColor: '#FF3B30',
	},
	favoriteButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
	},
})

export default GameDetailsScreen
