import { Text, View } from 'react-native';

import { style as s } from '../styles/onboardingStyles';

import { ChevronLeft, ChevronRight, Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

interface OnboardingStep3ViewProps {
  goBack: RootNavigationProp['goBack'];
  navigate: RootNavigationProp['navigate'];
}

const OnboardingStep3View: React.FC<OnboardingStep3ViewProps> = ({ goBack, navigate }) => (
  <Container>
    <View style={s.image}>
      <Logo />
    </View>

    <View style={s.content}>
      <Text style={s.title}>Celebre & Compartilhe</Text>
      <Text style={s.subtitle}>
        Compartilhe seus sucessos, desafios e momentos divertidos. Celebre suas conquistas e motive
        outros membros a alcançarem seus próprios objetivos.
      </Text>
      <View style={s.btnContainer}>
        <Button
          onPress={() => goBack()}
          label="Voltar"
          variant="ghost"
          iconLeft={<ChevronLeft color={theme.colors.neutrals[950]} />}
        />
        <Button
          label="Continuar"
          textMode="dark"
          onPress={() => navigate('Onboarding4')}
          iconRight={<ChevronRight color={theme.colors.neutrals[50]} />}
        />
      </View>
    </View>
  </Container>
);

export default OnboardingStep3View;
