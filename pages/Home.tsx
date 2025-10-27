import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center justify-center px-4 py-8">
        <Text className="text-3xl font-bold text-gray-900">Welcome to MotoXtreme!</Text>
        <Text className="text-base text-gray-600 mt-2 mb-8">NativeWind Components</Text>

        {/* Primary Buttons */}
        <View className="w-full max-w-sm mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Primary Buttons</Text>
          <View className="gap-3">
            <Button variant="primary" onPress={() => console.log('Primary pressed')}>
              Primary Button
            </Button>
          
          </View>
        </View>

        {/* Secondary Buttons */}
        <View className="w-full max-w-sm mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Secondary Buttons</Text>
          <View className="gap-3">
            <Button variant="secondary" onPress={() => console.log('Secondary pressed')}>
              Secondary Button
            </Button>
           
          </View>
        </View>

       
      </View>
    </ScrollView>
  );
}
