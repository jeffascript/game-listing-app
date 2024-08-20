import { useNavigation } from '@react-navigation/native'
import { GamesScreenNavigationProp, FavoritesScreenNavigationProp } from '@/types/game'

export const useAppNavigation = () => {
	const navigation = useNavigation<GamesScreenNavigationProp | FavoritesScreenNavigationProp>()

	return {
		navigateToGameDetails: (gameId: string) => {
			;(navigation as GamesScreenNavigationProp).navigate('GameDetails', { gameId })
		},
	}
}
