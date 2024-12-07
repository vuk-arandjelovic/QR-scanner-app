# QR-scanner-app 📱

A mobile application built with Expo that allows users to scan and manage their shopping receipts. This application serves as a digital receipt manager, helping users track their purchases, monitor price history, and manage warranties.

## Features

- QR Code scanning of Serbian fiscal receipts
- Receipt history tracking and filtering
- Store locations with interactive map
- Price history tracking for purchased items
- Warranty/guarantee management system
- User authentication with token refresh mechanism
- Comprehensive profile statistics

## Prerequisites

- Node.js (developed with v22.2.0)
- Expo CLI (npx expo works too)
- Expo Go app for mobile testing
- Yarn (or npm)

## Project Setup

1. Clone the repository
```bash
git clone https://github.com/vuk-arandjelovic/QR-scanner-app.git
cd QR-scanner-app
```

2. Install dependencies
```bash
yarn
# or using npm
npm i
```

3. Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_API_URL=your_backend_url
```

4. Start the development server
```bash
yarn start
# or using npm
npm run start
```

## Technical Details

- **Expo SDK**: Version 52
- **Navigation**: React Navigation v6 with drawer navigation
- **State Management**: React hooks and context
- **API Integration**: Axios with token refresh mechanism
- **Maps Integration**: react-native-maps
- **UI Components**: Custom components with consistent styling

## Project Structure

```
QR-scanner-app/
├── assets/              # Images and static assets
├── components/          # Reusable UI components
├── screens/             # Authentication screens
│   └── screens-home/    # Main application screens    
├── services/           # API service layer
├── styles/            # Global styles and theme
└── config/            # Application configuration
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT License

Copyright (c) 2024 Vuk Arandjelovic