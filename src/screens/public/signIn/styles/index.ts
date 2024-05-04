import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '@/styles/theme';

export const style = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    marginTop: RFValue(32),
    fontSize: RFValue(28),
    fontWeight: '600',
  },
  subtitle: {
    marginTop: RFValue(16),
    fontSize: RFValue(16),
    fontWeight: '400',
  },
  form: {
    marginTop: RFValue(32),
    gap: RFValue(8),
  },
  formFooter: {
    marginTop: '50%',
    marginBottom: RFValue(16),
    gap: RFValue(16),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: RFValue(8),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  textForgotPassword: {
    color: theme.colors.secondary[500],
    fontWeight: '600',
  },
  createAccount: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: RFValue(4),
  },
  textCreateAccount: {
    fontWeight: '600',
    color: theme.colors.secondary[500],
  },
});
