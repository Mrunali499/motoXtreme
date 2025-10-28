import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../assets/motoXtreme-logo.svg';

export default function LandingPage() {
  return (
    <View className="flex-1 bg-[--background-color] items-center justify-start">
      <View className="w-full max-w-[412px] h-[743px] items-center">
        <View className="w-full items-center pt-[112px]">
          <MotoXtremeLogo width="100%" height={392} />
        </View>

        <View className="absolute top-[574px] w-full items-center">
          <Button
            variant="primary"
            title="GET STARTED"
            onPress={() => console.log('Get Started pressed')}
          />
        </View>
      </View>
    </View>
  );
}