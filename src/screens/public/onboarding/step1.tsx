import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Button } from './components/button-default';

import { ChevronRight, Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
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
        <Button
          onPress={() => navigate('Onboarding2')}
          label="Continuar"
          iconRight={<ChevronRight color={theme.colors.neutrals[950]} />}
        />
      </View>
    </Container>
  );
}