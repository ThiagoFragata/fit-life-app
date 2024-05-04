import { ReactElement } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '@/styles/theme';

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

const s = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: RFValue(8),
  },
  btnDefault: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary[500],
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
    borderRadius: RFValue(999),
    marginTop: RFValue(16),
  },
  btnGhost: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 244, 237, 0.5)',
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
    borderRadius: RFValue(999),
    marginTop: RFValue(16),
    color: theme.colors.neutrals[950],
  },
  btnTextLight: {
    fontWeight: '500',
    fontSize: RFValue(12),
    color: theme.colors.neutrals[950],
  },
  btnTextDark: {
    fontWeight: '500',
    fontSize: RFValue(12),
    color: theme.colors.neutrals[50],
  },
});
