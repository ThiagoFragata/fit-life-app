import { ReactElement } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

import { styleSignIn as s } from '@/screens/public/onboarding/style';

interface ButtonProps extends PressableProps {
  label: string;
  variant?: 'default' | 'ghost';
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  textMode?: 'dark' | 'light';
}

export function Button({
  label,
  iconLeft,
  iconRight,
  textMode = 'light',
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <Pressable style={variant === 'default' ? s.btnDefault : s.btnGhost} {...props}>
      {iconLeft}
      <Text style={textMode === 'dark' ? s.btnTextDark : s.btnTextLight}>{label}</Text>
      {iconRight}
    </Pressable>
  );
}
