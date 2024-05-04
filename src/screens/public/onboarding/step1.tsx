import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

import { Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
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
        <Pressable style={s.btnContainer} onPress={() => navigate('Onboarding2')}>
          <Text style={s.btnText}>Continuar</Text>
        </Pressable>
      </View>
    </Container>
  );
}
