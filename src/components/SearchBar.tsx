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
    <View className="relative" style={{ zIndex: showOptions ? 9999 : 1 }}>
      {/* Search Bar Input - always 30px height with consistent styling */}
      <View
        className={`w-[165px] h-[30px] bg-button-secondary-text ${showOptions ? 'rounded-t-[5px]' : 'rounded-[5px]'} flex-row items-center px-[5px] relative`}
        style={{
          zIndex: showOptions ? 1001 : 1,
          position: 'relative'
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
            style={{
              textAlignVertical: 'center',
              includeFontPadding: false,
              color: '#000000' // Ensure text color stays black
            }}
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

      {/* Search Options Overlay - separate container below search bar */}
      {showOptions && (
        <View
          className="absolute bg-button-secondary-text rounded-b-[5px]"
          style={{
            top: 30, // Start exactly where search bar ends
            left: 0,
            width: 165,
            paddingTop: 0, // No gap between search bar and options
            paddingHorizontal: 5,
            paddingBottom: 10,
            zIndex: 9998,
            position: 'absolute'
          }}
        >
          {/* Horizontal line above options */}
          <View
            className="w-[155px] self-center"
            style={{
              height: 1,
              backgroundColor: '#333333',
              opacity: 0.3,
              marginBottom: 8
            }}
          />

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