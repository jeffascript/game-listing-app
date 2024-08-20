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
const API_KEY = ENV VAR
