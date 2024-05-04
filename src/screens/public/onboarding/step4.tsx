import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, Text, View } from 'react-native';

import { Logo } from '@/assets';
import { Container } from '@/components/atoms/container';
import { styleSignIn as s } from '@/screens/public/onboarding/style';
import { RootNavigationProp } from '@/types/screens';

export function OnboardingStep4() {
  const { goBack } = useNavigation<RootNavigationProp>();

  return (
    <Container>
      <View style={s.image}>
        <Logo />
      </View>

      <View style={s.content}>
        <Text style={s.title}>Pronto para começar?</Text>
        <Text style={s.subtitle}>
          Junte-se a nós e faça parte de uma comunidade que se apoia, se inspira e se diverte
          enquanto busca uma vida mais saudável e ativa!
        </Text>
        <Pressable style={s.btnContainer} onPress={() => goBack()}>
          <Text style={s.btnText}>Voltar</Text>
        </Pressable>
        <Pressable style={s.btnContainer} onPress={() => Alert.alert('Sign-in')}>
          <Text style={s.btnText}>Continuar</Text>
        </Pressable>
      </View>
    </Container>
  );
}
