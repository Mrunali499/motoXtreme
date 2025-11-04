import React from 'react';
import { View, Text } from 'react-native';

interface CurrentStatusCardProps {
  territoriesOwned: number;
  kmThisMonth: number;
  groupRides: number;
  cityRank: number;
}

export function CurrentStatusCard({
  territoriesOwned,
  kmThisMonth,
  groupRides,
  cityRank,
}: CurrentStatusCardProps) {
  const stats = [
    {
      value: territoriesOwned,
      label: 'Territories\nOwned',
      showHash: false,
      formatNumber: false,
    },
    {
      value: kmThisMonth,
      label: 'KM This\nMonth',
      showHash: false,
      formatNumber: true,
    },
    {
      value: groupRides,
      label: 'Group\nRides',
      showHash: false,
      formatNumber: false,
    },
    {
      value: cityRank,
      label: 'City\nRank',
      showHash: true,
      formatNumber: false,
    },
  ];

  return (
    <View className="w-[90%] max-w-[361px] h-[111px] bg-input-bg border border-input-border rounded-[13px] self-center p-4">
      <Text className="text-text-primary font-inter font-medium text-[16px] leading-[21px] mb-4">
        Current Ride Status
      </Text>

      <View className="flex-row justify-between items-center">
        {stats.map((stat, index) => (
          <View key={index} className="items-center">
            <Text className="text-button-primary-bg font-inter font-bold text-[12px] leading-[12px] text-center">
              {stat.showHash && '#'}
              {stat.formatNumber ? stat.value.toLocaleString() : stat.value}
            </Text>
            <Text className="text-text-primary font-inter font-normal text-[11px] leading-[13px] text-center mt-1">
              {stat.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}