import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

import { Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
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
        <Pressable style={s.btnContainer} onPress={() => goBack()}>
          <Text style={s.btnText}>Voltar</Text>
        </Pressable>
        <Pressable style={s.btnContainer} onPress={() => navigate('Onboarding3')}>
          <Text style={s.btnText}>Continuar</Text>
        </Pressable>
      </View>
    </Container>
  );
}
