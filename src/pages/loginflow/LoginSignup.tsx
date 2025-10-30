import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../../assets/motoXtreme-logo.svg';

interface LoginSignupProps {
  onLogin: () => void;
}

export default function LoginSignup({ onLogin }: LoginSignupProps) {
  return (
    <View className="flex-1 bg-bg-primary items-center justify-center px-4 overflow-hidden">
      <View className="w-full max-w-[412px] items-center">
        <MotoXtremeLogo width={301} height={301} />

        <View className="mt-[70px] w-full items-center gap-y-4">
          <Button
            variant="dark"
            title="Log In"
            onPress={onLogin}
          />
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