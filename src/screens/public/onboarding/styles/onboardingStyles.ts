import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const style = StyleSheet.create({
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
});
