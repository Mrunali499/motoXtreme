import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Navbar } from '../components/Navbar';
import { RideCard } from '../components/RideCard';

export default function Home() {
  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleOpenRide = () => {
    console.log('Open ride pressed');
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

      <ScrollView className="flex-1 px-4 mt-4">
        <RideCard
          title="Desert Thunder Rally"
          from="Pune"
          to="Lonavala"
          dateTime="Tomorrow - 8:00 AM"
          ridersJoined={24}
          weather="Clear"
          temperature="24C"
          duration="2h 15m"
          onPress={handleOpenRide}
        />
      </ScrollView>
    </View>
  );
}
