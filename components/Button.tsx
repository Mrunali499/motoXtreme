import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

type ButtonVariant = 'primary' | 'dark' | 'outline';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  title: string;
  className?: string;
}

export function Button({
  variant = 'primary',
  title,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'w-[297px] h-[42px] rounded-[8px] items-center justify-center';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-button-primary-bg',
    dark: 'bg-button-dark-bg',
    outline: 'bg-button-dark-bg border border-button-outline-border',
  };

  const textVariantStyles: Record<ButtonVariant, string> = {
    primary: 'text-button-primary-text',
    dark: 'text-button-dark-text',
    outline: 'text-button-outline-text',
  };

  const textStyles = `${textVariantStyles[variant]} font-inter font-medium text-[20px] leading-[24px]`;

  const disabledStyles = disabled ? 'opacity-50' : '';

  const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`.trim();

  return (
    <Pressable
      className={buttonClassName}
      disabled={disabled}
      {...props}
    >
      <Text className={textStyles}>
        {title}
      </Text>
    </Pressable>
  );
}