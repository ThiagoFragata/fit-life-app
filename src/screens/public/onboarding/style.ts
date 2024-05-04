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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.greenPrimary,
    paddingVertical: RFValue(12),
    borderRadius: RFValue(999),
    marginTop: RFValue(16),
  },
  btnText: {
    fontWeight: '500',
    fontSize: RFValue(12),
  },
});
