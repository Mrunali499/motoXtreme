import React from 'react';
import { View, Text, Pressable } from 'react-native';
import WeatherRoadIcon from '../../assets/weather-road.svg';
import GroupIcon from '../../assets/group.svg';
import LeaderboardIcon from '../../assets/leaderboard.svg';
import TerritoriesIcon from '../../assets/territories.svg';

type ActionVariant = 'weather' | 'group' | 'leadership' | 'territories';

interface ActionsCardProps {
  variant: ActionVariant;
  isSelected?: boolean;
  onPress?: () => void;
}

const variantConfig: Record<ActionVariant, {
  icon: React.ComponentType<any>;
  title: string;
  iconWidth: number;
  iconHeight: number;
}> = {
  weather: {
    icon: WeatherRoadIcon,
    title: 'Weather & Road\nStatus',
    iconWidth: 35,
    iconHeight: 35,
  },
  group: {
    icon: GroupIcon,
    title: 'Group',
    iconWidth: 22.54,
    iconHeight:22.55,
  },
  leadership: {
    icon: LeaderboardIcon,
    title: 'Leadership',
    iconWidth: 24.17,
    iconHeight: 22.96,
  },
  territories: {
    icon: TerritoriesIcon,
    title: 'Territories',
    iconWidth: 20.30,
    iconHeight: 28.42,
  },
};

export function ActionsCard({
  variant,
  isSelected = false,
  onPress
}: ActionsCardProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 h-[154px] bg-input-bg rounded-[13px] items-center justify-center p-4 ${
        isSelected ? 'border-2 border-button-primary-bg' : 'border-2 border-input-border'
      }`}
    >
      <View className="w-[65px] h-[51px] bg-icon-container-bg border border-text-primary rounded-[8px] items-center justify-center mb-4">
        <Icon width={config.iconWidth} height={config.iconHeight} />
      </View>

      <Text className="text-text-primary font-inter font-medium text-[14px] leading-[17px] text-center max-w-[120px]" numberOfLines={2}>
        {config.title}
      </Text>
    </Pressable>
  );
}