import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Camera, Logo } from '@/assets';
import { ContainerHome } from '@/components/atoms/container-home';
import theme from '@/styles/theme';

export function Home() {
  return (
    <ContainerHome>
      <View style={s.header}>
        <Logo width={72} />
        <TouchableOpacity>
          <Camera color={theme.colors.neutrals[900]} />
        </TouchableOpacity>
      </View>
    </ContainerHome>
  );
}

const s = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
