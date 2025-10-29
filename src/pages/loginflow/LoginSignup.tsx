import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../../assets/motoXtreme-logo.svg';

interface LoginSignupProps {
  onLogin: () => void;
}

export default function LoginSignup({ onLogin }: LoginSignupProps) {
  return (
    <View className="flex-1 bg-bg-primary items-center justify-start">
      <View className="w-full max-w-[412px] h-[743px] items-center">
        <View className="w-full items-center pt-[112px]">
          <MotoXtremeLogo width="100%" height={392} />
        </View>

        <View className="absolute top-[530px] w-full items-center">
          <Button
            variant="dark"
            title="Log In"
            onPress={onLogin}
          />
        </View>

        <View className="absolute top-[599px] w-full items-center">
          <Button
            variant="outline"
            title="Sign Up"
            onPress={() => console.log('Sign Up pressed')}
          />
        </View>
      </View>
    </View>
  );
}