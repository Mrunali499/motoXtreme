import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

type ButtonVariant = 'primary';

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
  const baseStyles = 'w-[297px] h-[42px] rounded-[8px] items-center justify-center active:opacity-80';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[--primary-button-bg]',
  };

  const textStyles = 'text-[--primary-button-text] text-[20px] font-medium';

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