import { Text, View } from 'react-native';

import { style as s } from '../styles/onboardingStyles';

import { ChevronLeft, ChevronRight, Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

interface OnboardingStep2ViewProps {
  goBack: RootNavigationProp['goBack'];
  navigate: RootNavigationProp['navigate'];
}

const OnboardingStep2View: React.FC<OnboardingStep2ViewProps> = ({ goBack, navigate }) => (
  <Container>
    <View style={s.image}>
      <Logo />
    </View>

    <View style={s.content}>
      <Text style={s.title}>Conecte-se</Text>
      <Text style={s.subtitle}>
        Encontre parceiros de treino, compartilhe dicas e desafie-se a alcançar novos patamares
        juntos.
      </Text>
      <View style={s.btnContainer}>
        <Button
          label="Voltar"
          variant="ghost"
          onPress={() => goBack()}
          iconLeft={<ChevronLeft color={theme.colors.neutrals[950]} />}
        />
        <Button
          label="Continuar"
          textMode="dark"
          onPress={() => navigate('Onboarding3')}
          iconRight={<ChevronRight color={theme.colors.neutrals[50]} />}
        />
      </View>
    </View>
  </Container>
);

export default OnboardingStep2View;
