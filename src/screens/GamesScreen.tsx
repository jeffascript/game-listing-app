import React, { useEffect } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { useGameStore } from '../store/gameStore'
import GameCard from '../components/GameCard'
import { Game, RootStackParamList } from '@/types/game'
import { StackNavigationProp } from '@react-navigation/stack'

type GamesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GamesList'>

interface GamesScreenProps {
	navigation: GamesScreenNavigationProp
}

const GamesScreen = ({ navigation }: GamesScreenProps) => {
	const { games, loading, error, fetchGames } = useGameStore()

	useEffect(() => {
		fetchGames()
	}, [])

	const renderItem = ({ item }: { item: Game }) => (
		<GameCard game={item} onPress={() => navigation.navigate('GameDetails', { gameId: item.id })} />
	)

	if (loading) {
		return (
			<View style={styles.center}>
				<Text>Loading...</Text>
			</View>
		)
	}

	if (error) {
		return (
			<View style={styles.center}>
				<Text>Error: {error}</Text>
			</View>
		)
	}

	return (
		<FlatList
			data={games}
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
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default GamesScreen
