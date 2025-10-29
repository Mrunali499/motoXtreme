import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../assets/motoXtreme-logo.svg';

export default function Verification() {
  return (
    <View className="flex-1 bg-bg-primary items-center justify-start">
      <View className="w-full max-w-[412px] h-[743px] items-center">
        <View className="w-full items-center pt-[17px]">
          <MotoXtremeLogo width={301} height={301} />
        </View>

        <Text className="absolute top-[306px] w-[94px] h-[28px] text-[32px] font-medium leading-[24px] text-button-primary-text">Log In</Text>

        <View className="absolute top-[359px] w-full items-center">
          <View className="w-[297px]">
            <Text className="font-inter font-normal text-[16px] leading-[24px] text-text-white mb-[11px]">OTP</Text>
            <Text className="w-[297px] h-[36px] font-inter font-medium text-[14px] leading-[17px] text-text-subtitle mb-[11px]">We have sent the OTP code to your phone number</Text>
            <Input
              placeholder=""
              keyboardType="numeric"
            />
            <Text className="w-[30px] h-[24px] font-inter font-normal text-[11px] leading-[24px] text-text-timer mt-[11px]">01:00</Text>
          </View>
        </View>

        <View className="absolute top-[563px] w-full items-center">
          <Button variant="primary" title="Verify OTP" onPress={() => console.log('Verify OTP pressed')} />
        </View>
      </View>
    </View>
  );
}