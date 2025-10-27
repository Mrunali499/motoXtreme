# MotoXtreme - Project Structure

## Overview
MotoXtreme is a React Native mobile application built with Expo, TypeScript, and NativeWind (Tailwind CSS for React Native).

## Technology Stack

### Core Technologies
- **React Native** v0.81.5 - Mobile application framework
- **Expo** v54.0.20 - Development platform and tooling
- **TypeScript** v5.9.2 - Type-safe JavaScript
- **NativeWind** v4.2.1 - Tailwind CSS for React Native

### Additional Dependencies
- **React Native Reanimated** v4.1.3 - Animations
- **React Native Safe Area Context** v5.6.1 - Safe area handling
- **React Native SVG** v15.12.1 - SVG support
- **React Native Web** v0.21.0 - Web compatibility
- **Expo Haptics** v15.0.7 - Haptic feedback
- **Tailwind CSS** v3.4.18 - CSS framework

## Project Structure

```
motoXtreme/
│
├── App.tsx                      # Main application entry point (Routes/Navigation only)
├── index.ts                     # Expo entry point
├── app.json                     # Expo configuration
├── package.json                 # Project dependencies and scripts
│
├── pages/                       # Page components (.tsx files)
│   └── Home.tsx                 # Home page with button demos
│
├── components/                  # Reusable UI components
│   └── Button.tsx               # Custom Button component with NativeWind
│
├── app/                         # Expo Router directory (if needed in future)
│
├── assets/                      # Static SVG files only
│   ├── logo.svg                 # App logo
│   ├── home-icon.svg            # Home icon
│   ├── profile-icon.svg         # Profile icon
│   └── *.svg                    # All other SVG assets
│
├── .expo/                       # Expo generated files (git ignored)
├── node_modules/                # Dependencies (git ignored)
│
├── global.css                   # Global Tailwind CSS styles
├── tailwind.config.js           # Tailwind CSS configuration
├── babel.config.js              # Babel configuration with NativeWind preset
├── metro.config.js              # Metro bundler configuration
├── tsconfig.json                # TypeScript configuration
├── nativewind-env.d.ts          # NativeWind TypeScript types
│
├── .gitignore                   # Git ignore rules
└── projectstructure.md          # This file

```

## Directory Explanations

### `/pages` - Page Components
**Purpose:** Contains all page/screen components for the application.

**Rules:**
- Each file represents a complete page/screen
- Files must be `.tsx` (TypeScript + JSX)
- Pages contain page-specific UI and logic
- Pages import and use components from `/components`

**Example:**
```tsx
// pages/Home.tsx
import { Button } from '../components/Button';

export default function Home() {
  return <View>...</View>;
}
```

### `/components` - Reusable Components
**Purpose:** Contains reusable UI components that can be used across multiple pages.

**Rules:**
- Components are reusable and generic
- No page-specific logic
- Each component should have clear props interface
- Use NativeWind for styling

**Example:**
```tsx
// components/Button.tsx
export function Button({ variant, size, children, ...props }) {
  return <Pressable>...</Pressable>;
}
```

### `/assets` - Static SVG Files
**Purpose:** All icons and images in SVG format only.

**Rules:**
- ✅ All assets must be SVG format
- ✅ No sub-folders (all SVGs in root)
- ❌ No PNG, JPG, or other formats
- ❌ No font files

**Contents:**
- Icons (SVG)
- Illustrations (SVG)
- Logos (SVG)
- Background patterns (SVG)

## App.tsx - Application Entry Point

The `App.tsx` file should **ONLY** contain:
- Global style imports (`import './global.css'`)
- Page/route imports
- Navigation/routing logic
- Global components (StatusBar, Navigation, etc.)

**What NOT to include in App.tsx:**
- ❌ UI components or elements
- ❌ Page-specific logic
- ❌ Component implementations

**Current Structure:**
```tsx
import './global.css';
import { StatusBar } from 'expo-status-bar';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
```

## Component Library

### Custom NativeWind Components

We use our own custom component library built with NativeWind styling.

#### Button Component
**Location:** `components/Button.tsx`

**Features:**
- 5 Variants: `primary`, `secondary`, `outline`, `ghost`, `destructive`
- 3 Sizes: `sm`, `md`, `lg`
- States: `isLoading`, `disabled`
- Full TypeScript support
- NativeWind styling

**Usage:**
```tsx
import { Button } from '../components/Button';

<Button variant="primary" size="md" onPress={handlePress}>
  Click Me
</Button>
```

## Configuration Files

### `tailwind.config.js`
Configures Tailwind CSS for the project.
- Content paths for scanning files
- NativeWind preset
- Custom theme extensions

### `babel.config.js`
Configures Babel for transpilation.
- Expo preset with NativeWind JSX import
- NativeWind babel preset
- React Native Reanimated plugin

### `metro.config.js`
Configures Metro bundler.
- NativeWind wrapper for CSS processing
- Global CSS input path

### `tsconfig.json`
TypeScript compiler configuration.
- Strict mode enabled
- Includes all `.ts` and `.tsx` files

## Development Scripts

### Available Commands

```bash
# Start the development server
npm start
# or
npx expo start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## Best Practices

### 1. File Organization
- Keep pages in `/pages` directory
- Keep reusable components in `/components` directory
- Use descriptive file names (PascalCase for components)

### 2. Component Structure
```tsx
// Import React and types
import React from 'react';
import { View, Text } from 'react-native';

// Import components
import { Button } from '../components/Button';

// Define component
export default function PageName() {
  return (
    <View className="flex-1">
      {/* Component JSX */}
    </View>
  );
}
```

### 3. Styling with NativeWind
- Use Tailwind utility classes via `className` prop
- Keep styling consistent across components
- Use custom components from `/components` for common UI patterns

### 4. TypeScript
- Always define prop interfaces for components
- Use type annotations for functions
- Enable strict mode for better type safety

## Adding New Pages

1. Create a new file in `/pages` directory:
```tsx
// pages/NewPage.tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function NewPage() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl">New Page</Text>
    </View>
  );
}
```

2. Import and route in `App.tsx`:
```tsx
import NewPage from './pages/NewPage';
```

## Adding New Components

1. Create a new file in `/components` directory:
```tsx
// components/Card.tsx
import React from 'react';
import { View, type ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <View className={`bg-white rounded-lg p-4 shadow ${className}`} {...props}>
      {children}
    </View>
  );
}
```

2. Use the component in pages:
```tsx
import { Card } from '../components/Card';

<Card>
  <Text>Card content</Text>
</Card>
```

## Platform Support

- ✅ **iOS** - Full support
- ✅ **Android** - Full support
- ✅ **Web** - Full support via React Native Web

## Notes

- This project uses a **custom component library** with NativeWind
- No external UI component libraries are used (keeping it lightweight)
- All components are built from scratch with full customization
- TypeScript is used throughout for type safety

---

**Last Updated:** October 27, 2025
**Project:** MotoXtreme Mobile App
**Version:** 1.0.0
