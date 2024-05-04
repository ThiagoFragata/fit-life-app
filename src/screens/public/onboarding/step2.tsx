import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Button } from './components/button-default';

import { ChevronLeft, ChevronRight, Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

export function OnboardingStep2() {
  const { navigate, goBack } = useNavigation<RootNavigationProp>();

  return (
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
}
