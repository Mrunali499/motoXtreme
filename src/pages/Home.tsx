import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Navbar } from '../components/Navbar';

export default function Home() {
  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  return (
    <View className="flex-1 bg-bg-primary">
      <Navbar
        onSearchPress={handleSearchPress}
        onNotificationPress={handleNotificationPress}
      />

      <Text className="ml-[25px] mt-3 font-normal text-[10px] leading-[12px] text-text-primary">
        Upcoming Rides
      </Text>

      <ScrollView className="flex-1 px-4 mt-2">
        {/* Content will go here */}
      </ScrollView>
    </View>
  );
}
