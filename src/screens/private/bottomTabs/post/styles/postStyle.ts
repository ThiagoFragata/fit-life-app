import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '@/styles/theme';

export const style = StyleSheet.create({
  content: {
    flex: 1,
  },
  form: {
    marginTop: RFValue(16),
  },
  input: {
    borderWidth: RFValue(1),
    marginBottom: RFValue(16),
    borderRadius: RFValue(32),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
    borderColor: theme.colors.neutrals[600],
    backgroundColor: theme.colors.neutrals[100],
  },
  erroMessage: {
    marginTop: RFValue(8),
    color: theme.colors.danger[400],
  },
});
