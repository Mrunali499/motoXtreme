import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

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
      placeholderTextColor="#868788"
      selectionColor="#868788"
      cursorColor="#868788"
      {...props}
    />
  );
}