import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styleInput = StyleSheet.create({
  container: {},
  label: {
    fontWeight: '500',
    fontSize: RFValue(12),
    marginBottom: RFValue(4),
  },
  input: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFValue(999),
    paddingHorizontal: RFValue(8),
  },
  textInput: {
    flex: 1,
    padding: RFValue(12),
  },
});
