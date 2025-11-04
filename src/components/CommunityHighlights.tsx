import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export interface SimpleCommunityCard {
  title: string;
  riderName: string;
  timeAgo: string;
}

export interface CommunityHighlightsProps {
  title?: string;
  cards: SimpleCommunityCard[];
  onCardPress?: (card: SimpleCommunityCard) => void;
  className?: string;
}

export function CommunityHighlights({
  title = 'Community Highlights',
  cards,
  onCardPress,
  className = ''
}: CommunityHighlightsProps) {

  return (
    <View className={`w-full ${className}`}>
      {/* Header */}
      <View className="w-[90%] max-w-[361px] self-center mb-[18px]">
        <Text className="font-inter font-semibold text-[16px] leading-[21px] text-button-primary-bg">
          {title}
        </Text>
      </View>

      {/* Cards */}
      <View className="w-full">
        <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{
    paddingHorizontal: 16,
    columnGap: 16, 
  }}
  className="w-full"
>
  {cards.map((card, index) => (
    <TouchableOpacity
      key={index}
      className="w-[320px] h-[94px] rounded-[13px] bg-[#101010] border border-[#333333] p-[16px] relative mr-8"
      onPress={() => onCardPress?.(card)}
      activeOpacity={0.8}
    >
      <View className="flex-row items-start">
        <View className="w-[24px] h-[23px] rounded-full bg-[#E9280A] mt-1" />
        <View className="ml-2 flex-1">
          <Text className="font-inter font-medium text-[14px] leading-[21px] text-button-primary-text">
            {card.riderName}
          </Text>
          <Text className="font-inter font-normal text-[12px] leading-[14px] text-input-placeholder">
            {card.timeAgo}
          </Text>
          <Text className="font-inter font-normal text-[12px] leading-[14px] text-button-primary-text mt-2">
            {card.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>

      </View>
    </View>
  );
}