import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search-icon.svg';
import NotificationIcon from '../../assets/notification-icon.svg';
import { SearchBar, SearchOption } from './SearchBar';

interface NavbarProps {
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
}

export function Navbar({ onSearchPress, onNotificationPress }: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchPress = () => {
    setShowSearch(!showSearch);
    onSearchPress?.();
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleOptionSelect = (option: SearchOption) => {
    console.log('Search option selected:', option);
  };

  // Sample search options
  const searchOptions: SearchOption[] = [
    { id: '1', text: 'Pune City' },
    { id: '2', text: 'Mumbai City' },
    { id: '3', text: 'Nashik City' },
  ];

  return (
    <View className="w-full bg-bg-primary rounded-[6px] mt-10 relative" style={{ zIndex: showSearch ? 1000 : 100 }}>
      <View className="h-[60px] flex-row items-center justify-between px-4 relative" style={{ zIndex: showSearch ? 1001 : 101 }}>
        <Logo width={140} height={22} />

        <View className="flex-row items-center gap-x-4 mr-5">
          {showSearch ? (
            <SearchBar
              onClose={handleSearchClose}
              onSearch={handleSearch}
              onOptionSelect={handleOptionSelect}
              searchOptions={searchOptions}
            />
          ) : (
            <TouchableOpacity onPress={handleSearchPress}>
              <View className="w-[26px] h-[26px] bg-text-primary rounded-[20px] items-center justify-center shadow-lg">
                <SearchIcon width={10} height={10} />
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onNotificationPress}>
            <NotificationIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}