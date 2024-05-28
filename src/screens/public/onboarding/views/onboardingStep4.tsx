import { Text, View } from 'react-native';

import { style as s } from '../styles/onboardingStyles';

import { ChevronLeft, ChevronRight, Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

interface OnboardingStep4ViewProps {
  handleOnboarding: () => void;
  goBack: RootNavigationProp['goBack'];
}

const OnboardingStep4View: React.FC<OnboardingStep4ViewProps> = ({ goBack, handleOnboarding }) => (
  <Container>
    <View style={s.image}>
      <Logo />
    </View>

    <View style={s.content}>
      <Text style={s.title}>Pronto para começar?</Text>
      <Text style={s.subtitle}>
        Junte-se a nós e faça parte de uma comunidade que se apoia, se inspira e se diverte enquanto
        busca uma vida mais saudável e ativa!
      </Text>
      <View style={s.btnContainer}>
        <Button
          onPress={goBack}
          label="Voltar"
          variant="ghost"
          iconLeft={<ChevronLeft color={theme.colors.neutrals[950]} />}
        />
        <Button
          label="Continuar"
          textMode="dark"
          onPress={handleOnboarding}
          iconRight={<ChevronRight color={theme.colors.neutrals[50]} />}
        />
      </View>
    </View>
  </Container>
);

export default OnboardingStep4View;
