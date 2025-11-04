import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search-icon.svg';
import NotificationIcon from '../../assets/notification-icon.svg';

interface NavbarProps {
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
}

export function Navbar({ onSearchPress, onNotificationPress }: NavbarProps) {
  return (
    <View className="w-full h-[60px] bg-bg-primary rounded-[6px] flex-row items-center justify-between px-4 mt-10">
      <Logo width={140} height={22} />

      <View className="flex-row items-center gap-x-4 mr-5">
        <TouchableOpacity onPress={onSearchPress}>
          <View className="w-[26px] h-[26px] bg-text-primary rounded-[20px] items-center justify-center shadow-lg">
            <SearchIcon width={10} height={10} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onNotificationPress}>
          <NotificationIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}