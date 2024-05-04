import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Button } from './components/button-default';

import { ChevronLeft, ChevronRight, Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

export function OnboardingStep3() {
  const { navigate, goBack } = useNavigation<RootNavigationProp>();

  return (
    <Container>
      <View style={s.image}>
        <Logo />
      </View>

      <View style={s.content}>
        <Text style={s.title}>Celebre & Compartilhe</Text>
        <Text style={s.subtitle}>
          Compartilhe seus sucessos, desafios e momentos divertidos. Celebre suas conquistas e
          motive outros membros a alcançarem seus próprios objetivos.
        </Text>
        <View style={s.btnContainer}>
          <Button
            onPress={() => goBack()}
            label="Voltar"
            variant="ghost"
            iconLeft={<ChevronLeft color={theme.colors.neutrals[950]} />}
          />
          <Button
            onPress={() => navigate('Onboarding4')}
            label="Continuar"
            iconRight={<ChevronRight color={theme.colors.neutrals[950]} />}
          />
        </View>
      </View>
    </Container>
  );
}
