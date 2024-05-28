import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '@/styles/theme';

export const style = StyleSheet.create({
  content: {
    flex: 1,
  },
  caption: {
    marginTop: RFValue(32),
    fontSize: RFValue(14),
    fontWeight: '400',
  },
  title: {
    fontSize: RFValue(28),
    fontWeight: '600',
  },
  form: {
    marginTop: RFValue(32),
    gap: RFValue(8),
  },
  formFooter: {
    gap: RFValue(16),
  },
  formItem: {
    flexDirection: 'row',
    gap: RFValue(16),
  },
  textError: {
    color: theme.colors.danger[400],
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: RFValue(8),
  },
  account: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: RFValue(4),
    marginBottom: RFValue(16),
    paddingTop: RFValue(16),
  },
  textAccount: {
    fontWeight: '600',
    color: theme.colors.secondary[500],
  },
});
