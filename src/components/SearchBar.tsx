import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';
import CloseIcon from '../../assets/close.svg';
import SearchIcon from '../../assets/search-icon.svg';

export interface SearchOption {
  id: string;
  text: string;
  category?: string;
}

export interface SearchBarProps {
  onClose: () => void;
  onSearch: (query: string) => void;
  onOptionSelect?: (option: SearchOption) => void;
  placeholder?: string;
  className?: string;
  searchOptions?: SearchOption[];
}

export function SearchBar({ onClose, onSearch, onOptionSelect, placeholder = 'Search...', className = '', searchOptions = [] }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleTextChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  const handleOptionSelect = (option: SearchOption) => {
    setQuery(option.text);
    onSearch(option.text);
    onOptionSelect?.(option);
  };

  // Show all options when typing anything
  const showOptions = query.length > 0 && searchOptions.length > 0;

  return (
    <View className="relative">
      {/* Search Bar Input - always same height */}
      <View
        className={`w-[165px] h-[30px] bg-button-secondary-text rounded-[5px] flex-row items-center px-[5px] relative ${className}`}
        style={{
          shadowColor: showOptions ? '#000000' : 'transparent',
          shadowOffset: showOptions ? { width: 0, height: 4 } : { width: 0, height: 0 },
          shadowOpacity: showOptions ? 0.25 : 0,
          shadowRadius: showOptions ? 12 : 0,
          elevation: showOptions ? 12 : 0,
          zIndex: showOptions ? 1000 : 1
        }}
      >
        <SearchIcon width={10} height={10} />
        <View className="w-1" />
        <View className="flex-1 relative h-[26px]">
          {query.length === 0 && (
            <Text className="absolute left-[2px] text-[13px] text-black font-inter font-normal leading-[26px] opacity-60 z-[1]" style={{textAlignVertical: 'center', includeFontPadding: false}}>
              {placeholder}
            </Text>
          )}
          <TextInput
            className="absolute top-0 left-0 z-[2] w-full h-[26px] text-[13px] font-inter font-normal text-black bg-transparent border-0 p-0 m-0"
            style={{textAlignVertical: 'center', includeFontPadding: false}}
            value={query}
            onChangeText={handleTextChange}
            selectionColor="black"
            caretHidden={false}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            maxLength={50}
            autoComplete="off"
            autoCorrect={false}
            returnKeyType="search"
            multiline={false}
            scrollEnabled={false}
            selectTextOnFocus={false}
          />
        </View>
        <TouchableOpacity onPress={onClose}>
          <CloseIcon width={8} height={8} />
        </TouchableOpacity>
      </View>

      {/* Search Options Overlay - positioned absolutely below search bar */}
      {showOptions && (
        <View
          className="absolute bg-button-secondary-text rounded-[5px] z-[999]"
          style={{
            top: 35,
            left: 0,
            width: 165,
            paddingTop: 3,
            paddingHorizontal: 5,
            paddingBottom: 10,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 12,
            elevation: 12
          }}
        >
  
          {/* Search Options */}
          <View className="flex flex-col items-start w-full">
            {searchOptions.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => handleOptionSelect(item)}
                className="w-full mb-[5px]"
              >
                <Text className="text-[13px] text-black font-inter font-normal">
                  {item.text}
                </Text>
                {item.category && (
                  <Text className="text-[11px] text-input-placeholder font-inter font-normal">
                    {item.category}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}