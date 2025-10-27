# MotoXtreme - Development Rules & Guidelines

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Folder Structure Rules](#folder-structure-rules)
4. [Figma to Code Workflow](#figma-to-code-workflow)
5. [Component Development Rules](#component-development-rules)
6. [Styling Rules](#styling-rules)
7. [Color Usage Rules](#color-usage-rules)
8. [Responsive Design Rules](#responsive-design-rules)
9. [Code Reusability Rules](#code-reusability-rules)
10. [Best Practices](#best-practices)

---

## Project Overview

MotoXtreme is a React Native mobile application built with:
- **React Native** - Mobile framework
- **TypeScript** - Type safety
- **NativeWind** - Tailwind CSS for React Native
- **Expo** - Development platform

---

## Technology Stack

### Required Technologies
- ✅ React Native
- ✅ TypeScript
- ✅ Tailwind CSS (via NativeWind)
- ✅ Custom NativeWind components

### Prohibited Technologies
- ❌ Inline styles
- ❌ StyleSheet.create
- ❌ Hard-coded colors
- ❌ External UI libraries

---

## Folder Structure Rules

### 1. Project Structure

```
motoXtreme/
├── App.tsx              # Routes and navigation ONLY
├── pages/               # All page components
│   ├── [flow-name]/     # Optional: Folder for specific flows
│   │   └── PageName.tsx
│   └── Home.tsx
├── components/          # All reusable components
│   └── Button.tsx
├── assets/              # All static assets (SVG only)
│   └── *.svg            # All icons and images in SVG format
├── ref/                 # Figma designs and reference files
│   ├── full-screens/    # Full Figma screen SVGs
│   └── components/      # Component-specific SVGs
└── global.css           # Global styles and color variables
```

### 2. App.tsx Rules

**✅ ALLOWED in App.tsx:**
- Routes and navigation logic
- Page imports
- Global component imports (StatusBar, Navigation)
- Global style imports

**❌ NOT ALLOWED in App.tsx:**
- UI components or elements
- Page-specific logic
- Component implementations
- Business logic

**Example:**
```tsx
// ✅ CORRECT
import './global.css';
import { StatusBar } from 'expo-status-bar';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}

// ❌ WRONG
export default function App() {
  return (
    <View className="flex-1">
      <Text>Home Screen</Text>
      <Button>Click</Button>
    </View>
  );
}
```

### 3. Pages Folder Rules

**Purpose:** Contains all page/screen components.

**Rules:**
- One page = One file
- File name must be PascalCase (e.g., `Home.tsx`, `UserProfile.tsx`)
- Pages can be organized in sub-folders by flow

**Folder Organization:**
```
pages/
├── Home.tsx                    # Main pages at root
├── auth/                       # Authentication flow
│   ├── Login.tsx
│   ├── Register.tsx
│   └── ForgotPassword.tsx
├── profile/                    # Profile flow
│   ├── ViewProfile.tsx
│   └── EditProfile.tsx
└── orders/                     # Orders flow
    ├── OrderList.tsx
    └── OrderDetails.tsx
```

### 4. Components Folder Rules

**Purpose:** Contains all reusable components.

**Rules:**
- Components must be reusable across multiple pages
- One component = One file
- File name must be PascalCase (e.g., `Button.tsx`, `Card.tsx`)
- No page-specific logic

**Example Structure:**
```
components/
├── Button.tsx
├── Card.tsx
├── Input.tsx
├── Modal.tsx
└── Avatar.tsx
```

### 5. Assets Folder Rules

**Purpose:** Contains all static SVG files only.

**Rules:**
- ✅ All assets must be in **SVG format only**
- ✅ All icons and images go directly in `/assets` folder
- ✅ Use descriptive file names with kebab-case
- ❌ No PNG, JPG, or other image formats
- ❌ No font files
- ❌ No sub-folders (all SVGs in root of assets/)

**Structure:**
```
assets/
├── logo.svg
├── home-icon.svg
├── profile-icon.svg
├── background-pattern.svg
└── app-illustration.svg
```

**Example Usage:**
```tsx
import LogoSvg from '../assets/logo.svg';

<LogoSvg width={100} height={100} />
```

### 6. Reference Folder (ref/) Rules

**Purpose:** Store Figma designs and reference materials.

**Rules:**
- Full Figma screen SVGs go in `ref/full-screens/`
- Component-specific SVGs go in `ref/components/`
- Use descriptive names matching the page/component

**Structure:**
```
ref/
├── full-screens/
│   ├── home-screen.svg
│   └── profile-screen.svg
└── components/
    ├── button-primary.svg
    └── card-layout.svg
```

---

## Figma to Code Workflow

### Workflow Steps

#### Step 1: Receive Full Figma Screen
When user provides a full Figma screen SVG:
1. Save the SVG in `ref/full-screens/[page-name].svg`
2. Analyze the design
3. Identify reusable components
4. Build the page using existing components
5. Create new components only if needed

#### Step 2: Build the Page
1. Create page file in `pages/` folder
2. Use existing components from `components/` folder
3. Extract colors to `global.css`
4. Use Tailwind CSS classes only
5. Ensure responsive layout

#### Step 3: Handle Component-Specific Changes
If user provides a component/section SVG:
1. Save in `ref/components/[component-name].svg`
2. Update the specific component
3. Test across all pages using that component

### Figma Design Assumptions

When user provides Figma SVG:
- **Full screen SVG** = Complete page implementation
- **Component SVG** = Single component, layout frame, or UI region
- **Section SVG** = Specific section within a page

---

## Component Development Rules

### 1. Component Creation Rules

**Before Creating a New Component:**
1. ✅ Check if similar component already exists
2. ✅ Can existing component be extended with props?
3. ✅ Is the component truly reusable?

**Only create new component if:**
- No similar component exists
- Existing component cannot be extended
- Component will be used in multiple places

### 2. Component Props Rules

**Use props for:**
- Different variants (e.g., button styles)
- Different sizes
- Different content
- Different behaviors
- Conditional rendering

**Example:**
```tsx
// ✅ CORRECT - Using props for variants
<Button variant="primary" size="lg">Submit</Button>
<Button variant="outline" size="sm">Cancel</Button>

// ❌ WRONG - Creating separate components
<PrimaryButton>Submit</PrimaryButton>
<OutlineButton>Cancel</OutlineButton>
```

### 3. Component Structure Template

```tsx
import React from 'react';
import { View, Text, Pressable, type PressableProps } from 'react-native';

// 1. Define prop types
interface ComponentNameProps extends PressableProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

// 2. Create component with proper TypeScript types
export function ComponentName({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ComponentNameProps) {

  // 3. Define Tailwind classes based on props
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-900',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  // 4. Combine classes
  const componentClass = `${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // 5. Return component
  return (
    <Pressable className={componentClass} {...props}>
      {children}
    </Pressable>
  );
}
```

---

## Styling Rules

### 1. STRICTLY Use Tailwind CSS

**✅ ALLOWED:**
- Tailwind utility classes via `className`
- CSS variables from `global.css`
- NativeWind styling

**❌ PROHIBITED:**
- Inline styles: `style={{ color: 'red' }}`
- StyleSheet.create
- Direct CSS in JS

**Examples:**

```tsx
// ✅ CORRECT - Tailwind classes
<View className="flex-1 bg-white p-4">
  <Text className="text-xl font-bold text-gray-900">Title</Text>
</View>

// ✅ CORRECT - CSS variables from global.css
<View className="bg-primary-bg">
  <Text className="text-primary-text">Title</Text>
</View>

// ❌ WRONG - Inline styles
<View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Title</Text>
</View>

// ❌ WRONG - StyleSheet
const styles = StyleSheet.create({
  container: { flex: 1 }
});
```

### 2. CSS to Tailwind Conversion

If user provides CSS, follow these steps:

**Step 1: Identify CSS properties**
```css
.button {
  background-color: #3B82F6;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
}
```

**Step 2: Convert to Tailwind**
```tsx
<Pressable className="bg-blue-600 px-6 py-3 rounded-lg text-base text-white">
  Button
</Pressable>
```

**Conversion Reference:**
| CSS Property | Tailwind Class |
|--------------|----------------|
| `display: flex` | `flex` |
| `flex-direction: row` | `flex-row` |
| `flex-direction: column` | `flex-col` |
| `justify-content: center` | `justify-center` |
| `align-items: center` | `items-center` |
| `padding: 16px` | `p-4` |
| `margin: 8px` | `m-2` |
| `background-color: #fff` | `bg-white` |
| `color: #000` | `text-black` |
| `font-size: 16px` | `text-base` |
| `font-weight: bold` | `font-bold` |
| `border-radius: 8px` | `rounded-lg` |
| `width: 100%` | `w-full` |
| `height: 100%` | `h-full` |

---

## Color Usage Rules

### 1. Color Management

**✅ CORRECT Workflow:**

**Step 1: Check if color exists in `global.css`**
```css
/* global.css */
:root {
  --primary-bg: #3B82F6;
  --primary-text: #FFFFFF;
  --secondary-bg: #6B7280;
  --text-dark: #111827;
  --text-light: #9CA3AF;
}
```

**Step 2: If color exists, use it**
```tsx
<View className="bg-primary-bg">
  <Text className="text-primary-text">Title</Text>
</View>
```

**Step 3: If color doesn't exist, add it first**
```css
/* Add to global.css */
:root {
  --success-bg: #10B981;
  --danger-bg: #EF4444;
}
```

**Step 4: Then use the new color**
```tsx
<View className="bg-success-bg">
  <Text className="text-white">Success!</Text>
</View>
```

**❌ WRONG - Hard-coded colors:**
```tsx
// ❌ Never do this
<View style={{ backgroundColor: '#3B82F6' }}>
  <Text style={{ color: '#FFFFFF' }}>Title</Text>
</View>

// ❌ Never do this
<View className="bg-[#3B82F6]">
  <Text className="text-[#FFFFFF]">Title</Text>
</View>
```

### 2. Color Naming Convention

**Follow this pattern:**
- `--[purpose]-[property]`

**Examples:**
```css
/* Purpose-based naming */
--primary-bg
--primary-text
--secondary-bg
--secondary-text

/* State-based naming */
--success-bg
--error-bg
--warning-bg

/* Component-based naming */
--button-bg
--card-bg
--input-border
```

### 3. Dynamic Colors

**If component has 2+ color values:**

**❌ WRONG - Hard-coded:**
```tsx
<View className={status === 'active' ? 'bg-[#10B981]' : 'bg-[#EF4444]'}>
```

**✅ CORRECT - Using CSS variables:**

**Step 1: Define in global.css**
```css
:root {
  --status-active: #10B981;
  --status-inactive: #EF4444;
}
```

**Step 2: Use in component**
```tsx
<View className={status === 'active' ? 'bg-status-active' : 'bg-status-inactive'}>
```

---

## Responsive Design Rules

### 1. Mobile-First Approach

**Design for smallest screen first, then scale up.**

```tsx
// ✅ CORRECT - Mobile first
<View className="w-full px-4 md:px-8 lg:px-12">
  <Text className="text-base md:text-lg lg:text-xl">Title</Text>
</View>
```

### 2. Screen Size Support

**Must support all device sizes:**
- Small phones (320px - 375px width)
- Standard phones (375px - 414px width)
- Large phones (414px+ width)
- Tablets (768px+ width)

### 3. Responsive Layout Rules

**✅ Use:**
- Flex layouts (`flex`, `flex-row`, `flex-col`)
- Percentage-based widths (`w-full`, `w-1/2`)
- Max widths (`max-w-sm`, `max-w-md`)
- Responsive padding/margin (`p-4 md:p-6`)

**❌ Avoid:**
- Fixed widths (except for icons/small elements)
- Fixed heights for content containers
- Hard-coded dimensions

**Example:**
```tsx
// ✅ CORRECT - Responsive
<View className="w-full max-w-md mx-auto px-4">
  <View className="flex-row gap-2 flex-wrap">
    <View className="flex-1 min-w-[150px]">
      <Text>Content</Text>
    </View>
  </View>
</View>

// ❌ WRONG - Fixed dimensions
<View style={{ width: 375, height: 667 }}>
  <View style={{ width: 200 }}>
    <Text>Content</Text>
  </View>
</View>
```

### 4. Testing Responsive Layouts

**Test on:**
- ✅ iOS (iPhone SE, iPhone 14, iPhone 14 Pro Max)
- ✅ Android (Small, Medium, Large devices)
- ✅ Tablets (iPad, Android tablets)
- ✅ Web (if applicable)

---

## Code Reusability Rules

### 1. No Duplicate Sections

**❌ WRONG - Duplicated code:**
```tsx
<View className="bg-white p-4 rounded-lg">
  <Text>Section 1</Text>
</View>
<View className="bg-white p-4 rounded-lg">
  <Text>Section 2</Text>
</View>
<View className="bg-white p-4 rounded-lg">
  <Text>Section 3</Text>
</View>
```

**✅ CORRECT - Array-based rendering:**
```tsx
const sections = [
  { id: 1, title: 'Section 1' },
  { id: 2, title: 'Section 2' },
  { id: 3, title: 'Section 3' },
];

{sections.map((section) => (
  <View key={section.id} className="bg-white p-4 rounded-lg">
    <Text>{section.title}</Text>
  </View>
))}
```

### 2. Array-Based Rendering

**Use for:**
- Lists of items
- Repeated UI elements
- Navigation items
- Feature cards
- Any duplicate structure

**Template:**
```tsx
// 1. Define data array
const items = [
  { id: 1, title: 'Item 1', icon: '🏠', color: 'bg-blue-500' },
  { id: 2, title: 'Item 2', icon: '⚙️', color: 'bg-green-500' },
  { id: 3, title: 'Item 3', icon: '👤', color: 'bg-purple-500' },
];

// 2. Map over array
{items.map((item) => (
  <View key={item.id} className={`p-4 rounded-lg ${item.color}`}>
    <Text className="text-2xl">{item.icon}</Text>
    <Text className="text-white">{item.title}</Text>
  </View>
))}
```

### 3. Component Reusability

**Before duplicating code, ask:**
1. Can this be a reusable component?
2. What parts are different? → Make them props
3. What parts are the same? → Keep as default

**Example:**

**❌ WRONG:**
```tsx
// ProfileCard.tsx
<View className="bg-white p-4 rounded-lg">
  <Image source={require('./avatar1.png')} />
  <Text className="text-xl">John Doe</Text>
</View>

// UserCard.tsx
<View className="bg-white p-4 rounded-lg">
  <Image source={require('./avatar2.png')} />
  <Text className="text-xl">Jane Smith</Text>
</View>
```

**✅ CORRECT:**
```tsx
// Card.tsx - Reusable component
interface CardProps {
  avatar: string;
  name: string;
}

function Card({ avatar, name }: CardProps) {
  return (
    <View className="bg-white p-4 rounded-lg">
      <Image source={{ uri: avatar }} />
      <Text className="text-xl">{name}</Text>
    </View>
  );
}

// Usage
<Card avatar="./avatar1.png" name="John Doe" />
<Card avatar="./avatar2.png" name="Jane Smith" />
```

---

## Best Practices

### 1. TypeScript Best Practices

```tsx
// ✅ Always define prop interfaces
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onPress: () => void;
  children: React.ReactNode;
}

// ✅ Use type annotations
const handlePress = (): void => {
  console.log('Pressed');
};

// ✅ Use proper React Native types
import type { ViewProps, TextProps, PressableProps } from 'react-native';
```

### 2. Code Organization

```tsx
// Order of code sections:
// 1. Imports
import React from 'react';
import { View, Text } from 'react-native';

// 2. Type definitions
interface Props {
  title: string;
}

// 3. Component definition
export function Component({ title }: Props) {
  // 4. State and hooks
  const [count, setCount] = useState(0);

  // 5. Functions
  const handlePress = () => {};

  // 6. Render
  return <View>...</View>;
}
```

### 3. File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Pages: `PascalCase.tsx` (e.g., `Home.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Assets: `kebab-case` (e.g., `app-logo.png`)

### 4. Import Order

```tsx
// 1. React imports
import React from 'react';

// 2. React Native imports
import { View, Text } from 'react-native';

// 3. Third-party imports
import { useNavigation } from '@react-navigation/native';

// 4. Local component imports
import { Button } from '../components/Button';

// 5. Utility/helper imports
import { formatDate } from '../utils/date';

// 6. Type imports
import type { UserType } from '../types';
```

### 5. Comments

```tsx
// ✅ Use comments for:
// - Complex logic explanation
// - Non-obvious decisions
// - Section separators

// ❌ Don't comment:
// - Obvious code
// - Every single line
```

---

## Development Checklist

Before submitting any code, verify:

### Component Checklist
- [ ] Component is in `/components` folder
- [ ] Component uses TypeScript with proper types
- [ ] Component uses only Tailwind CSS (no inline styles)
- [ ] Component is reusable with props
- [ ] Colors are defined in `global.css`
- [ ] No hard-coded colors
- [ ] Responsive layout tested on multiple devices
- [ ] No duplicate code (array-based rendering used)

### Page Checklist
- [ ] Page is in `/pages` folder (or sub-folder)
- [ ] Page imports from `App.tsx`
- [ ] Uses existing components (not duplicating)
- [ ] Uses only Tailwind CSS
- [ ] Colors from `global.css`
- [ ] Responsive layout
- [ ] No inline styles
- [ ] Array-based rendering for repeated elements

### Figma Implementation Checklist
- [ ] Figma SVG saved in `ref/` folder
- [ ] Analyzed design for reusable components
- [ ] Used existing components where possible
- [ ] Created new components only when necessary
- [ ] Colors extracted to `global.css`
- [ ] Layout is responsive
- [ ] Tested on multiple device sizes

---

## Quick Reference

### Do's ✅
- Use TypeScript for all files
- Use Tailwind CSS exclusively
- Define colors in `global.css`
- Reuse existing components
- Use props for variations
- Array-based rendering for duplicates
- Responsive layouts
- Test on multiple devices
- Organize pages in flow folders
- Save Figma designs in `ref/`

### Don'ts ❌
- No inline styles
- No StyleSheet.create
- No hard-coded colors
- No duplicate components
- No fixed dimensions (except icons)
- No page logic in App.tsx
- No UI elements in App.tsx
- No hard-coded repeated sections

---

**Last Updated:** October 27, 2025
**Project:** MotoXtreme
**Version:** 1.0.0
