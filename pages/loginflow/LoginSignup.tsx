import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import MotoXtremeLogo from '../../assets/motoXtreme-logo.svg';

export default function LoginSignup() {
  return (
    <View className="flex-1 bg-[--background-color] items-center justify-start">
      <View className="w-full max-w-[412px] h-[743px] items-center">
        <View className="w-full items-center pt-[112px]">
          <MotoXtremeLogo width="100%" height={392} />
        </View>

        <View className="absolute top-[530px] w-full items-center">
          <Button
            variant="dark"
            title="Log In"
            onPress={() => console.log('Log In pressed')}
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