import { Text, View } from 'react-native';

import { style as s } from '../styles/onboardingStyles';

import { ChevronRight, Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

interface OnboardingStep1ViewProps {
  navigate: RootNavigationProp['navigate'];
}

const OnboardingStep1View: React.FC<OnboardingStep1ViewProps> = ({ navigate }) => (
  <Container>
    <View style={s.image}>
      <Logo />
    </View>

    <View style={s.content}>
      <Text style={s.title}>Bem-vindo à comunidade Fitness</Text>
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

export default OnboardingStep1View;
