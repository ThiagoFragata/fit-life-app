import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { ChevronRight, Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { style as s } from '@/screens/public/onboarding/style';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

export function OnboardingStep1() {
  const { navigate } = useNavigation<RootNavigationProp>();

  return (
    <Container>
      <View style={s.image}>
        <Logo />
      </View>

      <View style={s.content}>
        <Text style={s.title}>Bem-vido à comunidade Fitness</Text>
        <Text style={s.subtitle}>
          Estamos animados em tê-lo(a) a bordo da nossa rede social exclusiva para membros da
          academia!
        </Text>
        <View style={s.btnContainer}>
          <Button
            textMode="dark"
            label="Continuar"
            onPress={() => navigate('Onboarding2')}
            iconRight={<ChevronRight color={theme.colors.neutrals[50]} />}
          />
        </View>
      </View>
    </Container>
  );
}
