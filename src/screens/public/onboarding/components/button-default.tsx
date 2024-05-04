import { ReactElement } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

import { styleSignIn as s } from '@/screens/public/onboarding/style';

interface ButtonProps extends PressableProps {
  label: string;
  variant?: 'default' | 'ghost';
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

export function Button({ label, variant = 'default', iconLeft, iconRight, ...props }: ButtonProps) {
  return (
    <Pressable style={variant === 'default' ? s.btnDefault : s.btnGhost} {...props}>
      {iconLeft}
      <Text style={s.btnText}>{label}</Text>
      {iconRight}
    </Pressable>
  );
}
