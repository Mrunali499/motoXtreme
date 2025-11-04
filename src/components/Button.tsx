import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'glass';

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
  const baseStyles = variant === 'glass'
    ? 'items-center justify-center'
    : 'w-[297px] h-[42px] rounded-[8px] items-center justify-center';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-button-primary-bg',
    dark: 'bg-button-dark-bg',
    outline: 'bg-button-dark-bg border border-button-outline-border',
    glass: 'bg-white/25 border border-white/40',
  };

  const textVariantStyles: Record<ButtonVariant, string> = {
    primary: 'text-button-primary-text',
    dark: 'text-button-dark-text',
    outline: 'text-button-outline-text',
    glass: 'text-text-primary',
  };

  const textStyles = variant === 'glass'
    ? `${textVariantStyles[variant]} font-['Open_Sans'] font-medium text-[12px] leading-[10px]`
    : `${textVariantStyles[variant]} font-inter font-medium text-[20px] leading-[24px]`;

  const disabledStyles = disabled ? 'opacity-50' : '';

  const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`.trim();

  const glassStyle = variant === 'glass' ? {
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.831,
    shadowRadius: 3,
  } : undefined;

  return (
    <Pressable
      className={buttonClassName}
      style={glassStyle}
      disabled={disabled}
      {...props}
    >
      <Text className={textStyles}>
        {title}
      </Text>
    </Pressable>
  );
}