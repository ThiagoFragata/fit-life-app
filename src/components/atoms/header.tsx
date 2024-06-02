import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ChevronLeft } from '@/assets';
import theme from '@/styles/theme';

interface HeaderScreenProps {
  screenLabel: string;
}

export function HeaderScreen({ screenLabel }: HeaderScreenProps) {
  const { goBack } = useNavigation();

  return (
    <View style={s.header}>
      <TouchableOpacity style={s.btnBack} onPress={goBack}>
        <ChevronLeft color={theme.colors.neutrals[900]} />
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={s.titleScreen}>{screenLabel}</Text>
    </View>
  );
}

export const s = StyleSheet.create({
  header: {
    marginTop: RFValue(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleScreen: {
    zIndex: -10,
    width: '100%',
    position: 'absolute',
    fontSize: RFValue(14),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
