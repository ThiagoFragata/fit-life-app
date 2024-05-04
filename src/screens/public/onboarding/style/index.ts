import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '@/styles/theme';

export const styleSignIn = StyleSheet.create({
  title: {
    fontSize: RFValue(28),
    fontWeight: '600',
  },
  subtitle: {
    marginTop: RFValue(16),
    fontSize: RFValue(16),
    fontWeight: '400',
  },
  image: {
    alignItems: 'center',
    marginTop: RFValue(64),
    justifyContent: 'center',
  },
  content: {
    marginTop: 'auto',
    marginBottom: RFValue(16),
  },
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
