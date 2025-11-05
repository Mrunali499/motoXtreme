import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../../assets/home-icon.svg';
import RideIcon from '../../assets/ride-icon.svg';
import UserProfileIcon from '../../assets/user-profile.svg';
import { SvgProps } from 'react-native-svg';

type TabType = 'home' | 'rides' | 'profile';

interface BottomNavProps {
  activeTab?: TabType;
  onTabPress?: (tab: TabType) => void;
}

const tabConfig: Record<TabType, {
  icon: React.ComponentType<SvgProps>;
  label: string;
  iconWidth: number;
  iconHeight: number;
}> = {
  home: {
    icon: HomeIcon,
    label: 'Home',
    iconWidth: 30.38,
    iconHeight: 26.76,
  },
  rides: {
    icon: RideIcon,
    label: 'Rides',
    iconWidth: 39.2,
    iconHeight: 23.28,
  },
  profile: {
    icon: UserProfileIcon,
    label: 'Profile',
    iconWidth: 27,
    iconHeight: 28,
  },
};

export function BottomNavigation({
  activeTab = 'home',
  onTabPress
}: BottomNavProps) {
  const tabs = Object.keys(tabConfig) as TabType[];
  const activeIndex = tabs.indexOf(activeTab);
  const insets = useSafeAreaInsets();

  return (
    <View className="relative" style={{ paddingBottom: insets.bottom }}>
      <View className="w-full h-[67px] bg-input-bg rounded-t-[32px] flex-row justify-between items-center px-8">
        {tabs.map((tabKey) => {
          const config = tabConfig[tabKey];
          const Icon = config.icon;
          const isActive = activeTab === tabKey;

          return (
            <TouchableOpacity
              key={tabKey}
              onPress={() => onTabPress?.(tabKey)}
              className="items-center justify-center p-3"
              activeOpacity={0.7}
            >
              <View className="w-[50px] h-[50px] items-center justify-center">
                {!isActive && (
                  <Icon
                    width={config.iconWidth}
                    height={config.iconHeight}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Active Tab Indicator */}
      <View
        className="absolute w-[46px] h-[45px] bg-button-primary-bg rounded-full items-center justify-center"
        style={{
          left: `${(activeIndex * (100 / 3)) + (50 / 3) - 5.75}%`,
          bottom: 11 + insets.bottom,
        }}
      >
        {(() => {
          const ActiveIcon = tabConfig[activeTab].icon;
          const activeConfig = tabConfig[activeTab];
          return <ActiveIcon width={activeConfig.iconWidth} height={activeConfig.iconHeight} fill="#FAF3E8" />;
        })()}
      </View>
    </View>
  );
}