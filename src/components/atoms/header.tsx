import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ChevronLeft } from '@/assets';
import theme from '@/styles/theme';

interface HeaderScreenProps {
  screenLabel: string;
  backLabel: string;
}

export function HeaderScreen({ screenLabel, backLabel }: HeaderScreenProps) {
  const { goBack } = useNavigation();

  return (
    <View style={s.header}>
      <TouchableOpacity style={s.btnBack} onPress={goBack}>
        <ChevronLeft color={theme.colors.neutrals[900]} />
        <Text>{backLabel}</Text>
      </TouchableOpacity>
      <Text style={s.titleScreen}>{screenLabel}</Text>
    </View>
  );
}

export const s = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: RFValue(8),
  },
  btnBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleScreen: {
    zIndex: -100,
    width: '100%',
    position: 'absolute',
    fontSize: RFValue(14),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
