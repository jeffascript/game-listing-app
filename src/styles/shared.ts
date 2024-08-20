import { StyleSheet } from 'react-native'

export const COLORS = {
	primary: '#007AFF',
	secondary: '#FF3B30',
	background: '#F2F2F7',
	text: '#000000',
	textSecondary: '#8E8E93',
}

export const sharedStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: COLORS.text,
		marginBottom: 16,
	},
	errorText: {
		color: COLORS.secondary,
		fontSize: 16,
		textAlign: 'center',
	},
})
