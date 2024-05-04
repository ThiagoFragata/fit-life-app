import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

import { Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
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
        <Pressable style={s.btnContainer} onPress={() => goBack()}>
          <Text style={s.btnText}>Voltar</Text>
        </Pressable>

        <Pressable style={s.btnContainer} onPress={() => navigate('Onboarding4')}>
          <Text style={s.btnText}>Continuar</Text>
        </Pressable>
      </View>
    </Container>
  );
}
