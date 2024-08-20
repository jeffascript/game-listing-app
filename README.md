# GAME LISTING APP

This React Native application allows users to browse a list of games, view game details, and manage their favorite games. It's built using Expo, TypeScript, and implements modern React Native development practices.

## Features

- Browse a list of games
- View detailed information about each game
- Add/remove games to/from favorites
- Bottom tab navigation for easy access to games and favorites
- Responsive design for various screen sizes

## Tech Stack

- React Native
- Expo
- TypeScript
- Zustand (for state management)
- React Navigation
- Axios (for API requests)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator or Android Emulator (for mobile development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/game-listing-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Rename `.env.example` to `.env` and add your API key:
```bash
API_KEY=
```
4. Start the Expo development server:
```bash
npm start
```


## Usage

The app consists of two main screens:

1. Games Screen: Displays a list of all available games.
2. Favorites Screen: Shows the user's favorite games.

Users can tap on a game to view its details and add/remove it from their favorites.

## API Integration

The app uses a mock game API. To make API calls, include the API key in the headers:

```typescript
 API_KEY = Env Variable
```


## Improvement Ideas

Here are some ideas to further enhance the app:

1. **Search Functionality**: Implement a search bar to allow users to quickly find games by name or genre.
2. **User Authentication**: Add user authentication to save user preferences and favorite games across devices.
3. **Game Reviews and Ratings**: Allow users to leave reviews and rate games, and display average ratings.
4. **Push Notifications**: Notify users about new game releases or updates to their favorite games.
5. **Offline Mode**: Enable offline access to previously viewed games and favorites.
6. **Dark Mode**: Add a dark mode option for better user experience in low-light environments.
7. **Game Categories**: Organize games into categories or genres for easier browsing.
8. **In-App Purchases**: Offer in-app purchases for premium features or ad-free experience.
9. **Social Sharing**: Allow users to share their favorite games on social media platforms.
10. **Performance Optimization**: Continuously optimize the app for better performance and faster load times.
