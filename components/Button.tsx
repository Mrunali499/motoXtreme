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
    primary: 'bg-[--primary-button-bg]',
    dark: 'bg-[--dark-button-bg]',
    outline: 'bg-[--dark-button-bg] border border-[--outline-button-border]',
  };

  const textVariantStyles: Record<ButtonVariant, string> = {
    primary: 'text-[--primary-button-text]',
    dark: 'text-[--dark-button-text]',
    outline: 'text-[--outline-button-text]',
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