import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../../assets/motoXtreme-logo.svg';

export default function Verification() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View className="flex-1 bg-bg-primary items-center px-4 overflow-hidden">
      <View className="w-full max-w-[412px] items-center pt-[17px]">
        <MotoXtremeLogo width={301} height={301} />
      </View>

      <View className="w-full max-w-[412px] items-center -mt-[12px]">
        <Text className="text-[32px] font-medium leading-[32px] text-button-primary-text mb-[21px]">Log In</Text>

        <View className="w-full max-w-[297px]">
          <Text className="font-inter font-normal text-[16px] leading-[24px] text-text-white mb-[11px]">OTP</Text>
          <Text className="font-inter font-medium text-[14px] leading-[17px] text-text-subtitle mb-[11px]">We have sent the OTP code to your phone number</Text>
          <Input
            placeholder=""
            keyboardType="numeric"
          />
          <Text className="font-inter font-normal text-[11px] leading-[24px] text-text-timer mt-[11px]">{formatTime(timeLeft)}</Text>
        </View>

        <View className="w-full items-center mt-[42px]">
          <Button variant="primary" title="Verify OTP" onPress={() => console.log('Verify OTP pressed')} />
        </View>
      </View>
    </View>
  );
}