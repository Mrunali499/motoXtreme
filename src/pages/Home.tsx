import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Navbar } from '../components/Navbar';
import { RideCard } from '../components/RideCard';
import { Button } from '../components/Button';
import { CurrentStatusCard } from '../components/CurrentStatusCard';
import { ActionsCard } from '../components/ActionsCard';

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

  const handleCreateRide = () => {
    console.log('Create ride pressed');
  };

  const handleEvent = () => {
    console.log('Event pressed');
  };

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleWeatherPress = () => {
    setSelectedCard('weather');
    console.log('Weather & Road Status pressed');
  };

  const handleGroupPress = () => {
    setSelectedCard('group');
    console.log('Group pressed');
  };

  const handleLeadershipPress = () => {
    setSelectedCard('leadership');
    console.log('Leadership pressed');
  };

  const handleTerritoriesPress = () => {
    setSelectedCard('territories');
    console.log('Territories pressed');
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

        <View className="flex-row items-center mt-4 mb-6 w-[90%] max-w-[362px] self-center gap-x-4">
          <Button
            variant="primary"
            title="Create Ride"
            onPress={handleCreateRide}
            size="small"
            className="flex-1 h-[31px]"
          />
          <Button
            variant="secondary"
            title="Event"
            onPress={handleEvent}
            size="small"
            className="flex-1 h-[31px]"
          />
        </View>

        <CurrentStatusCard
          territoriesOwned={47}
          kmThisMonth={1247}
          groupRides={12}
          cityRank={23}
        />

        <View className="w-[90%] max-w-[361px] self-center mt-6">
          <Text className="font-inter font-semibold text-[16px] leading-[21px] text-button-primary-bg">
            Quick Actions
          </Text>
        </View>

        <View className="w-[90%] max-w-[361px] self-center mt-4 mb-6">
          <View className="flex-row gap-x-[20px] mb-4">
            <ActionsCard
              variant="weather"
              isSelected={selectedCard === 'weather'}
              onPress={handleWeatherPress}
            />
            <ActionsCard
              variant="group"
              isSelected={selectedCard === 'group'}
              onPress={handleGroupPress}
            />
          </View>
          <View className="flex-row gap-x-[20px]">
            <ActionsCard
              variant="leadership"
              isSelected={selectedCard === 'leadership'}
              onPress={handleLeadershipPress}
            />
            <ActionsCard
              variant="territories"
              isSelected={selectedCard === 'territories'}
              onPress={handleTerritoriesPress}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
