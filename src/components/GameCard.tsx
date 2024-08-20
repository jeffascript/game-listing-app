import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useGameStore } from '../store/gameStore'
import { Game } from '@/types/game'

interface GameCardProps {
	game: Game
	onPress: () => void
}

const GameCard: React.FC<GameCardProps> = ({ game, onPress }) => {
	const { toggleFavorite, favorites } = useGameStore()
	const isFavorite = favorites.some((fav) => fav.id === game.id)

	return (
		<View style={styles.main}>
			<TouchableOpacity style={styles.card} onPress={onPress}>
				<Image source={{ uri: game.iconURL }} style={styles.icon} />
				<View style={styles.info}>
					<Text style={styles.title}>{game.title}</Text>
					<Text>Rating: {game.rating}/5</Text>
				</View>
				<TouchableOpacity
					style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
					onPress={() => toggleFavorite(game)}
				>
					<Text style={styles.favoriteButtonText}>{isFavorite ? '♥' : '♡'}</Text>
				</TouchableOpacity>
			</TouchableOpacity>

			<TouchableOpacity style={styles.detailsButton} onPress={onPress}>
				<Text style={styles.detailsButtonText}>Details</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 12,
		marginBottom: 16,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: '#fff',
		// borderRadius: 8,
		// padding: 12,
		// marginBottom: 16,
		// elevation: 3,
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.1,
		// shadowRadius: 4,
	},
	icon: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 12,
	},
	info: {
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	favoriteButton: {
		padding: 8,
		borderRadius: 20,
		backgroundColor: '#f0f0f0',
	},
	favoriteButtonActive: {
		backgroundColor: '#ffcccb',
	},
	favoriteButtonText: {
		fontSize: 18,
	},
	detailsButton: {
		backgroundColor: '#007AFF',
		padding: 8,
		borderRadius: 4,
		marginLeft: 8,
		marginTop: 10,
	},
	detailsButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default GameCard
