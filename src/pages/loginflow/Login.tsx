import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../../assets/motoXtreme-logo.svg';

interface LoginProps {
  onSendOTP: () => void;
}

export default function Login({ onSendOTP }: LoginProps) {
  return (
    <View className="flex-1 bg-bg-primary items-center justify-start">
      <View className="w-full max-w-[412px] h-[743px] items-center">
        <View className="w-full items-center pt-[17px]">
          <MotoXtremeLogo width={301} height={301} />
        </View>

        <Text className="absolute top-[306px] w-[94px] h-[28px] text-[32px] font-medium leading-[24px] text-button-primary-text">Log In</Text>

        <View className="absolute top-[359px] w-full items-center">
          <View className="w-[297px]">
            <Text className="font-inter font-normal text-[16px] leading-[24px] text-text-white mb-[11px]">Phone Number</Text>
            <Input
              placeholder="+91 xxxxxxxxxx"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View className="absolute top-[467px] w-full items-center">
          <Button variant="primary" title="Send OTP" onPress={onSendOTP} />
        </View>
      </View>
    </View>
  );
}