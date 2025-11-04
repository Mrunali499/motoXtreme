import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'glass' | 'secondary';
type ButtonSize = 'small' | 'large';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  title: string;
  className?: string;
  size?: ButtonSize;
}

export function Button({
  variant = 'primary',
  title,
  disabled,
  className = '',
  size = 'large',
  ...props
}: ButtonProps) {
  const getBaseStyles = () => {
    if (variant === 'glass') {
      return 'items-center justify-center';
    }
    if (variant === 'secondary') {
      return 'w-[297px] h-[42px] rounded-[6px] items-center justify-center';
    }
    return 'w-[297px] h-[42px] rounded-[8px] items-center justify-center';
  };

  const baseStyles = getBaseStyles();

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-button-primary-bg',
    dark: 'bg-button-dark-bg',
    outline: 'bg-button-dark-bg border border-button-outline-border',
    glass: 'bg-white/25 border border-white/40',
    secondary: 'bg-button-secondary-bg border border-button-secondary-border',
  };

  const textVariantStyles: Record<ButtonVariant, string> = {
    primary: 'text-button-primary-text',
    dark: 'text-button-dark-text',
    outline: 'text-button-outline-text',
    glass: 'text-text-primary',
    secondary: 'text-button-secondary-text',
  };

  const getTextStyles = () => {
    if (variant === 'glass') {
      return `${textVariantStyles[variant]} font-['Open_Sans'] font-medium text-[12px] leading-[10px]`;
    }
    if (size === 'small') {
      return `${textVariantStyles[variant]} font-inter font-medium text-[12px] leading-[10px]`;
    }
    return `${textVariantStyles[variant]} font-inter font-medium text-[20px] leading-[24px]`;
  };

  const textStyles = getTextStyles();

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