import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from './Button';
import UsersIcon from '../../assets/users-streamline.svg';
import SunsetIcon from '../../assets/sunset-streamline.svg';
import ClockIcon from '../../assets/clock.svg';
import tailwindConfig from '../../tailwind.config.js';

const themeColors = tailwindConfig.theme?.extend?.colors as Record<string, string>;

interface RideCardProps {
  title: string;
  from: string;
  to: string;
  dateTime: string;
  ridersJoined: number;
  weather: string;
  temperature: string;
  duration: string;
  onPress?: () => void;
}

export function RideCard({
  title,
  from,
  to,
  dateTime,
  ridersJoined,
  weather,
  temperature,
  duration,
  onPress,
}: RideCardProps) {
  return (
    <View className="w-[90%] max-w-[362px] mb-4 self-center">
      <View className="w-full h-[202px] rounded-[13px] overflow-hidden">
        <LinearGradient
          colors={[themeColors['card-gradient-start'], themeColors['button-primary-bg']]}
          locations={[0, 2.31]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="flex-1"
        />
      </View>

      <View className="absolute inset-0 p-4">
        <Text className="text-text-primary font-bold text-[20px] leading-[24px] text-center mb-1">
          {title}
        </Text>

        <View className="flex-row items-center justify-center mb-6 flex-wrap">
          <Text className="text-text-primary font-normal text-[14px] leading-[17px]">
            {from}
          </Text>
          <Text className="text-text-primary font-normal text-[14px] leading-[17px] mx-1">
            →
          </Text>
          <Text className="text-text-primary font-normal text-[14px] leading-[17px]">
            {to}
          </Text>
          <Text className="text-text-primary font-normal text-[12px] leading-[15px] ml-1">
            ( {dateTime} )
          </Text>
        </View>

        <View className="flex-row justify-between items-center mb-10">
          <View className="flex-row items-center flex-1">
            <UsersIcon width={20} height={20} />
            <View className="ml-1">
              <Text className="text-text-primary font-normal text-[11px] leading-[13px]">
                {ridersJoined} riders
              </Text>
              <Text className="text-text-primary font-normal text-[11px] leading-[13px]">
                joined
              </Text>
            </View>
          </View>

          <View className="flex-row items-center flex-1 justify-center">
            <SunsetIcon width={20} height={20} />
            <View className="ml-1">
              <Text className="text-text-primary font-normal text-[11px] leading-[13px]">
                {weather},
              </Text>
              <Text className="text-text-primary font-normal text-[11px] leading-[13px]">
                {temperature}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center flex-1 justify-end">
            <ClockIcon width={20} height={20} />
            <Text className="text-text-primary font-normal text-[11px] leading-[13px] ml-1">
              {duration}
            </Text>
          </View>
        </View>

        <Button
          variant="glass"
          title="OPEN RIDE"
          onPress={onPress}
          className="w-[160px] h-[26px] rounded-[6px] self-center"
        />
      </View>
    </View>
  );
}