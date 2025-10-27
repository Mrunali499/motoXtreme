import React from 'react';
import { Pressable, Text, ActivityIndicator, type PressableProps } from 'react-native';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = 'flex-row items-center justify-center rounded-lg active:opacity-80';

  // Variant styles - Using colors from global.css
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[--primary-button-bg]',
    secondary: 'bg-[--secondary-button-bg]',
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3 py-2 h-9',
    md: 'px-4 py-3 h-12',
    lg: 'px-6 py-4 h-14',
  };

  // Text variant styles - Using colors from global.css
  const textVariantStyles: Record<ButtonVariant, string> = {
    primary: 'text-[--primary-button-text]',
    secondary: 'text-[--secondary-button-text]',
  };

  // Text size styles
  const textSizeStyles: Record<ButtonSize, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // Disabled styles
  const disabledStyles = (disabled || isLoading) ? 'opacity-50' : '';

  // Combine all styles
  const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

  return (
    <Pressable
      className={buttonClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text className={`font-semibold ${textVariantStyles[variant]} ${textSizeStyles[size]}`}>
          {children}
        </Text>
      )}
    </Pressable>
  );
}
