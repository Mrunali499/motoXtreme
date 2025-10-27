# MotoXtreme - Refactor & Deployment Checklist

## Table of Contents
1. [Core Development Rules](#core-development-rules)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Component Quality Checks](#component-quality-checks)
4. [Page Quality Checks](#page-quality-checks)
5. [Code Review Checklist](#code-review-checklist)
6. [Common Issues & Fixes](#common-issues--fixes)
7. [Deployment Rules](#deployment-rules)

---

## Core Development Rules

### 1. File Extensions
- ✅ **ALL pages and components MUST use `.tsx`** extension
- ❌ Never use `.js` or `.jsx`

**Check:**
```bash
# Find any .js or .jsx files (should return empty)
find ./pages -name "*.js" -o -name "*.jsx"
find ./components -name "*.js" -o -name "*.jsx"
```

### 2. No Hard-Coded Values

**PROHIBITED Hard-Coded Values:**

#### Colors
```tsx
// ❌ WRONG - Hard-coded colors
<View style={{ backgroundColor: '#3B82F6' }} />
<View className="bg-[#3B82F6]" />
<Text style={{ color: 'blue' }} />

// ✅ CORRECT - Use global.css variables
<View className="bg-primary-bg" />
<Text className="text-primary-text" />
```

#### Dimensions (Width/Height)
```tsx
// ❌ WRONG - Hard-coded dimensions
<View style={{ width: 375, height: 667 }} />
<View className="w-[375px] h-[667px]" />

// ✅ CORRECT - Responsive dimensions
<View className="w-full h-screen" />
<View className="max-w-md mx-auto" />
```

#### Font Sizes
```tsx
// ❌ WRONG - Hard-coded font sizes
<Text style={{ fontSize: 16 }} />
<Text className="text-[16px]" />

// ✅ CORRECT - Tailwind font size classes
<Text className="text-base" />
<Text className="text-lg" />
```

#### Spacing (Padding/Margin)
```tsx
// ❌ WRONG - Hard-coded spacing
<View style={{ padding: 16, margin: 8 }} />
<View className="p-[16px] m-[8px]" />

// ✅ CORRECT - Tailwind spacing classes
<View className="p-4 m-2" />
<View className="px-6 py-3" />
```

### 3. Styling Rules

**STRICTLY use Tailwind CSS only:**

```tsx
// ✅ CORRECT - Tailwind classes
<View className="flex-1 bg-white p-4 rounded-lg shadow-md">
  <Text className="text-xl font-bold text-gray-900">Title</Text>
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

### 4. Responsive Design Requirements

**ALL components must be responsive on:**
- iPhone SE (375px width)
- iPhone 14 (390px width)
- iPhone 14 Pro Max (430px width)
- iPad (768px+ width)
- Android Small (360px width)
- Android Medium (411px width)
- Android Large (428px+ width)

**Requirements:**
```tsx
// ✅ Must work on ALL screen sizes
<View className="w-full max-w-md mx-auto px-4">
  <View className="flex-row flex-wrap gap-2">
    <View className="flex-1 min-w-[150px]">
      {/* Content */}
    </View>
  </View>
</View>

// ❌ Fixed dimensions fail on different screens
<View style={{ width: 375 }}>
  {/* This breaks on larger/smaller screens */}
</View>
```

### 5. TypeScript Requirements

**All imports/exports must be properly typed:**

```tsx
// ✅ CORRECT - Proper type exports
import type { ViewProps, TextProps, PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant, size, children, ...props }: ButtonProps) {
  // Component code
}

// ❌ WRONG - No types
export function Button({ variant, size, children, ...props }) {
  // Component code
}
```

---

## Pre-Deployment Checklist

### Before ANY Deployment, Verify:

#### 1. File Extension Check
```bash
□ All pages use .tsx extension
□ All components use .tsx extension
□ No .js or .jsx files in pages/ or components/
```

#### 2. Hard-Coded Values Check
```bash
□ No hard-coded colors (check for #, rgb, rgba)
□ No hard-coded widths/heights (check for px values)
□ No hard-coded font sizes
□ No hard-coded spacing values
□ All colors defined in global.css
```

#### 3. Styling Check
```bash
□ No inline styles (style={{ }})
□ No StyleSheet.create
□ Only Tailwind className used
□ No custom CSS files (except global.css)
```

#### 4. Responsive Design Check
```bash
□ Tested on iPhone SE (small)
□ Tested on iPhone 14 (medium)
□ Tested on iPhone 14 Pro Max (large)
□ Tested on iPad
□ Tested on Android devices
□ Layout looks correct on all sizes
□ No horizontal scrolling
□ All content visible
```

#### 5. TypeScript Check
```bash
□ All components have proper type definitions
□ All props interfaces defined
□ No 'any' types used
□ Proper type imports (import type)
□ No TypeScript errors
```

#### 6. Code Quality Check
```bash
□ No console.log statements (except debugging)
□ No commented-out code
□ No unused imports
□ No unused variables
□ Proper component naming (PascalCase)
```

---

## Component Quality Checks

### After Creating ANY Component, Run These Checks:

#### Checklist Template:

```markdown
## Component: [ComponentName]
File: components/[ComponentName].tsx

### 1. File Extension
- [ ] File uses .tsx extension

### 2. TypeScript
- [ ] Props interface defined
- [ ] Extends proper React Native types
- [ ] All props properly typed
- [ ] No 'any' types

### 3. Styling
- [ ] Uses only Tailwind classes
- [ ] No inline styles
- [ ] No StyleSheet.create
- [ ] No hard-coded colors

### 4. Hard-Coded Values
- [ ] No hard-coded colors (#hex, rgb, color names)
- [ ] No hard-coded dimensions (width/height)
- [ ] No hard-coded font sizes
- [ ] No hard-coded spacing

### 5. Colors
- [ ] All colors defined in global.css
- [ ] Using CSS variable classes (bg-primary-bg, etc.)
- [ ] No color values in component

### 6. Responsive Design
- [ ] Tested on iPhone SE (375px)
- [ ] Tested on iPhone 14 (390px)
- [ ] Tested on iPhone 14 Pro Max (430px)
- [ ] Tested on iPad (768px+)
- [ ] Tested on Android Small (360px)
- [ ] Tested on Android Medium (411px)
- [ ] Layout works on all sizes
- [ ] No overflow or scrolling issues

### 7. Reusability
- [ ] Component accepts props for variations
- [ ] No page-specific logic
- [ ] Can be used in multiple places
- [ ] Props documented

### 8. Code Quality
- [ ] No console.log
- [ ] No commented code
- [ ] No unused imports
- [ ] No unused variables
- [ ] Proper naming conventions
```

### Example Component Audit:

```tsx
// ❌ FAIL - Multiple issues
export function BadButton({ text }) {
  return (
    <Pressable style={{
      backgroundColor: '#3B82F6',  // ❌ Hard-coded color
      width: 200,                   // ❌ Hard-coded width
      padding: 12                   // ❌ Hard-coded spacing
    }}>
      <Text style={{ fontSize: 16, color: 'white' }}>  // ❌ Inline styles
        {text}
      </Text>
    </Pressable>
  );
}

// ✅ PASS - Follows all rules
interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-primary-bg',
    secondary: 'bg-secondary-bg',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  return (
    <Pressable
      className={`rounded-lg ${variantStyles[variant]} ${sizeStyles[size]}`}
      {...props}
    >
      <Text className="font-semibold text-white">
        {children}
      </Text>
    </Pressable>
  );
}
```

---

## Page Quality Checks

### After Creating ANY Page, Run These Checks:

#### Checklist Template:

```markdown
## Page: [PageName]
File: pages/[PageName].tsx

### 1. File Extension
- [ ] File uses .tsx extension

### 2. Location
- [ ] File in correct pages/ folder
- [ ] Imported in App.tsx
- [ ] Route configured

### 3. TypeScript
- [ ] All props typed (if page accepts props)
- [ ] All state variables typed
- [ ] All functions typed

### 4. Styling
- [ ] Uses only Tailwind classes
- [ ] No inline styles
- [ ] No StyleSheet.create

### 5. Hard-Coded Values
- [ ] No hard-coded colors
- [ ] No hard-coded dimensions
- [ ] No hard-coded font sizes
- [ ] No hard-coded spacing
- [ ] No hard-coded data (use arrays)

### 6. Colors
- [ ] All colors from global.css
- [ ] No color values in page

### 7. Components
- [ ] Uses existing components from components/
- [ ] No duplicate component code
- [ ] Props passed correctly

### 8. Data
- [ ] No duplicate sections (use array.map)
- [ ] Dynamic data in arrays
- [ ] No hard-coded repeated content

### 9. Responsive Design
- [ ] Tested on all iOS devices
- [ ] Tested on all Android devices
- [ ] ScrollView used if content > screen
- [ ] Layout adapts to screen size
- [ ] No horizontal overflow

### 10. Code Quality
- [ ] No console.log (except necessary)
- [ ] No commented code
- [ ] No unused imports
- [ ] No unused variables
- [ ] Imports organized
```

### Example Page Audit:

```tsx
// ❌ FAIL - Multiple issues
export default function BadPage() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>  // ❌ Inline styles
      <View style={{ width: 375, padding: 20 }}>  // ❌ Fixed width
        <Text style={{ fontSize: 24, color: '#000000' }}>Title</Text>  // ❌ Hard-coded

        {/* ❌ Duplicate sections */}
        <View style={{ backgroundColor: '#3B82F6', padding: 16 }}>
          <Text>Section 1</Text>
        </View>
        <View style={{ backgroundColor: '#3B82F6', padding: 16 }}>
          <Text>Section 2</Text>
        </View>
      </View>
    </View>
  );
}

// ✅ PASS - Follows all rules
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../components/Button';

export default function GoodPage() {
  // ✅ Data in array
  const sections = [
    { id: 1, title: 'Section 1' },
    { id: 2, title: 'Section 2' },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="w-full max-w-md mx-auto px-4 py-6">
        <Text className="text-2xl font-bold text-gray-900">Title</Text>

        {/* ✅ Array-based rendering */}
        {sections.map((section) => (
          <View key={section.id} className="bg-primary-bg p-4 rounded-lg mt-4">
            <Text className="text-white">{section.title}</Text>
          </View>
        ))}

        {/* ✅ Using reusable component */}
        <Button variant="primary" onPress={() => {}}>
          Click Me
        </Button>
      </View>
    </ScrollView>
  );
}
```

---

## Code Review Checklist

### Manual Code Review Process:

#### Step 1: Visual Inspection
```bash
1. Open the file in editor
2. Scan for red flags:
   - style={{ }} patterns
   - #hex color codes
   - Hard-coded numbers (width: 375, etc.)
   - .js or .jsx extensions
   - StyleSheet.create
```

#### Step 2: Search for Patterns

**Search for Hard-Coded Colors:**
```bash
# Search for hex colors
grep -r "#[0-9A-Fa-f]\{6\}" pages/ components/

# Search for rgb/rgba
grep -r "rgb\|rgba" pages/ components/

# Search for color names
grep -r "backgroundColor.*['\"]" pages/ components/
```

**Search for Inline Styles:**
```bash
# Search for style prop
grep -r "style={{" pages/ components/

# Search for StyleSheet
grep -r "StyleSheet.create" pages/ components/
```

**Search for Hard-Coded Dimensions:**
```bash
# Search for width/height
grep -r "width.*[0-9]" pages/ components/
grep -r "height.*[0-9]" pages/ components/
```

#### Step 3: TypeScript Check
```bash
# Run TypeScript compiler
npx tsc --noEmit

# Should show NO errors
```

#### Step 4: Linting (if configured)
```bash
# Run linter
npm run lint

# Should show NO errors
```

---

## Common Issues & Fixes

### Issue 1: Hard-Coded Colors

**Problem:**
```tsx
<View style={{ backgroundColor: '#3B82F6' }}>
```

**Fix:**
1. Add color to `global.css`:
```css
:root {
  --primary-bg: #3B82F6;
}
```

2. Use Tailwind class:
```tsx
<View className="bg-primary-bg">
```

### Issue 2: Hard-Coded Dimensions

**Problem:**
```tsx
<View style={{ width: 375, height: 667 }}>
```

**Fix:**
```tsx
<View className="w-full h-screen">
```

### Issue 3: Inline Styles

**Problem:**
```tsx
<View style={{ flex: 1, padding: 16 }}>
```

**Fix:**
```tsx
<View className="flex-1 p-4">
```

### Issue 4: Duplicate Sections

**Problem:**
```tsx
<View className="card">
  <Text>Item 1</Text>
</View>
<View className="card">
  <Text>Item 2</Text>
</View>
<View className="card">
  <Text>Item 3</Text>
</View>
```

**Fix:**
```tsx
const items = ['Item 1', 'Item 2', 'Item 3'];

{items.map((item, index) => (
  <View key={index} className="card">
    <Text>{item}</Text>
  </View>
))}
```

### Issue 5: Missing TypeScript Types

**Problem:**
```tsx
export function Button({ variant, children }) {
  // ...
}
```

**Fix:**
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant, children }: ButtonProps) {
  // ...
}
```

### Issue 6: Not Responsive

**Problem:**
```tsx
<View style={{ width: 375 }}>
```

**Fix:**
```tsx
<View className="w-full max-w-md mx-auto">
```

---

## Deployment Rules

### Pre-Deployment Requirements

**ALL checks must PASS before deployment:**

#### 1. Code Quality
```bash
✓ No .js or .jsx files
✓ All files use .tsx
✓ No TypeScript errors
✓ No console.log statements
✓ No commented code
✓ No unused imports/variables
```

#### 2. Styling Compliance
```bash
✓ No inline styles
✓ No StyleSheet.create
✓ Only Tailwind classes used
✓ All colors in global.css
✓ No hard-coded colors
✓ No hard-coded dimensions
```

#### 3. Responsive Design
```bash
✓ Tested on iPhone SE
✓ Tested on iPhone 14
✓ Tested on iPhone 14 Pro Max
✓ Tested on iPad
✓ Tested on Android Small
✓ Tested on Android Medium
✓ Tested on Android Large
✓ All layouts work correctly
```

#### 4. Component Quality
```bash
✓ All components properly typed
✓ All components reusable
✓ No duplicate components
✓ Props documented
```

#### 5. Page Quality
```bash
✓ All pages properly typed
✓ No duplicate sections
✓ Array-based rendering used
✓ Uses existing components
```

#### 6. Testing
```bash
✓ App runs without errors
✓ All features work
✓ No crashes
✓ Performance is good
```

### Deployment Process

#### Step 1: Run All Checks
```bash
# 1. TypeScript check
npx tsc --noEmit

# 2. Search for issues
npm run check:hardcoded  # (if script exists)

# 3. Test on devices
npm run ios
npm run android
npm run web
```

#### Step 2: Manual Review
```bash
□ Review all changed files
□ Check for hard-coded values
□ Verify responsive design
□ Test all new features
```

#### Step 3: Build
```bash
# For production build
npx expo build:android
npx expo build:ios
```

#### Step 4: Deploy
```bash
# Deploy to stores or OTA updates
npx expo publish
```

---

## Quick Reference Commands

### Check for Issues

```bash
# Find .js/.jsx files (should be empty)
find ./pages ./components -name "*.js" -o -name "*.jsx"

# Find hard-coded colors
grep -r "#[0-9A-Fa-f]\{6\}" pages/ components/

# Find inline styles
grep -r "style={{" pages/ components/

# Find StyleSheet
grep -r "StyleSheet.create" pages/ components/

# Find hard-coded dimensions
grep -r "width.*[0-9]" pages/ components/

# TypeScript check
npx tsc --noEmit

# Run app
npx expo start
```

### Fix Common Issues

```bash
# Rename .js to .tsx
mv pages/Home.js pages/Home.tsx

# Add colors to global.css
echo "--new-color: #3B82F6;" >> global.css

# Clear cache and restart
npx expo start --clear
```

---

## Final Checklist Before ANY Deployment

```markdown
## Deployment Checklist

### Code Quality
- [ ] All files use .tsx extension
- [ ] No TypeScript errors
- [ ] No console.log statements
- [ ] No commented code
- [ ] No unused imports

### Styling
- [ ] No inline styles
- [ ] No StyleSheet.create
- [ ] Only Tailwind CSS used
- [ ] All colors in global.css

### Hard-Coded Values
- [ ] No hard-coded colors
- [ ] No hard-coded dimensions
- [ ] No hard-coded fonts
- [ ] No hard-coded spacing

### Responsive
- [ ] Tested on iOS devices
- [ ] Tested on Android devices
- [ ] All layouts responsive
- [ ] No overflow issues

### Components
- [ ] All properly typed
- [ ] All reusable
- [ ] No duplicates

### Pages
- [ ] All properly typed
- [ ] Array-based rendering
- [ ] Uses components

### Testing
- [ ] App runs without errors
- [ ] All features work
- [ ] Performance good

### Ready to Deploy
- [ ] All checks passed
- [ ] Reviewed by team
- [ ] Tested thoroughly
```

---

**Last Updated:** October 27, 2025
**Project:** MotoXtreme
**Version:** 1.0.0
