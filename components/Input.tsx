import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import tailwindConfig from '../tailwind.config.js';

const customColors = (tailwindConfig.theme?.extend?.colors || {}) as Record<string, string>;
const INPUT_PLACEHOLDER_COLOR = customColors['input-placeholder'] || '#868788';

interface InputProps extends TextInputProps {
  placeholder?: string;
  className?: string;
}

export function Input({
  placeholder,
  className = '',
  ...props
}: InputProps) {
  const baseStyles = 'w-[297px] h-[42px] bg-input-bg border border-input-border rounded-[7px] pl-[13px] text-text-white font-inter font-normal text-[13px] leading-[13px]';

  const inputClassName = `${baseStyles} ${className}`.trim();

  return (
    <TextInput
      className={inputClassName}
      placeholder={placeholder}
      placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
      selectionColor={INPUT_PLACEHOLDER_COLOR}
      cursorColor={INPUT_PLACEHOLDER_COLOR}
      {...props}
    />
  );
}