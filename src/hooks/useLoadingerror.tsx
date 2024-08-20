import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { sharedStyles, COLORS } from '@/styles/shared'

export const useLoadingError = () => {
	const renderLoading = () => (
		<View style={sharedStyles.centered}>
			<ActivityIndicator size="large" color={COLORS.primary} />
		</View>
	)

	const renderError = (errorMessage: string) => (
		<View style={sharedStyles.centered}>
			<Text style={sharedStyles.errorText}>{errorMessage}</Text>
		</View>
	)

	return { renderLoading, renderError }
}
