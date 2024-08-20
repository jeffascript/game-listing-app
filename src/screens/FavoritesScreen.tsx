import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { useGameStore } from '../store/gameStore'
import GameCard from '../components/GameCard'
import { Game, RootStackParamList } from '@/types/game'
import { StackNavigationProp } from '@react-navigation/stack'

type FavoritesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FavoritesList'>

interface FavoritesScreenProps {
	navigation: FavoritesScreenNavigationProp
}

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
	const { favorites } = useGameStore()

	const renderItem = ({ item }: { item: Game }) => (
		<GameCard game={item} onPress={() => navigation.navigate('GameDetails', { gameId: item.id })} />
	)

	if (favorites.length === 0) {
		return (
			<View style={styles.emptyContainer}>
				<Text style={styles.emptyText}>You haven't added any favorites yet.</Text>
			</View>
		)
	}

	return (
		<FlatList
			data={favorites}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			contentContainerStyle={styles.list}
		/>
	)
}

const styles = StyleSheet.create({
	list: {
		padding: 16,
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	emptyText: {
		fontSize: 18,
		textAlign: 'center',
		color: '#666',
	},
})

export default FavoritesScreen
