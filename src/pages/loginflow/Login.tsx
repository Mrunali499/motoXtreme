import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../../assets/motoXtreme-logo.svg';

interface LoginProps {
  onSendOTP: () => void;
}

export default function Login({ onSendOTP }: LoginProps) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9]/g, '');
    if (numericOnly.length <= 10) {
      setPhoneNumber(numericOnly);
    }
  };

  const handleSendOTP = () => {
    if (phoneNumber.trim().length === 10) {
      onSendOTP();
    }
  };

  // Check if phone number is valid (exactly 10 digits)
  const isPhoneNumberValid = phoneNumber.trim().length === 10;

  return (
    <View className="flex-1 bg-bg-primary items-center px-4 overflow-hidden">
      <View className="w-full max-w-[412px] items-center pt-[17px]">
        <MotoXtremeLogo width={301} height={301} />
      </View>

      <View className="w-full max-w-[412px] items-center -mt-[12px]">
        <Text className="text-[32px] font-medium leading-[32px] text-button-primary-text mb-[21px]">Log In</Text>

        <View className="w-full max-w-[297px]">
          <Text className="font-inter font-normal text-[16px] leading-[24px] text-text-white mb-[11px]">Phone Number</Text>
          <Input
            placeholder="+91 xxxxxxxxxx"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            maxLength={10}
          />
        </View>

        <View className="w-full items-center mt-[66px]">
          <Button variant="primary" title="Send OTP" onPress={handleSendOTP} />
        </View>
      </View>
    </View>
  );
}