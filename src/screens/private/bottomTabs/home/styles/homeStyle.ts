import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
  imageContent: {
    width: '100%',
    height: RFValue(400),
    borderRadius: RFValue(24),
  },
  listContent: {
    marginTop: RFValue(8),
    marginBottom: RFValue(32),
  },
  titleAndDescriptionView: {
    gap: RFValue(4),
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  description: {
    fontSize: RFValue(14),
    fontWeight: '400',
  },
});
