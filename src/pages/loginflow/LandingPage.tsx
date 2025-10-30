import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../../assets/motoXtreme-logo.svg';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <View className="flex-1 bg-bg-primary items-center justify-center px-4 overflow-hidden">
      <View className="w-full max-w-[412px] items-center">
        <MotoXtremeLogo width={301} height={301} />

        <View className="mt-[70px] w-full items-center">
          <Button
            variant="primary"
            title="GET STARTED"
            onPress={onGetStarted}
          />
        </View>
      </View>
    </View>
  );
}