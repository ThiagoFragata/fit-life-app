import { CommonActions, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { ChevronLeft, ChevronRight, Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { style as s } from '@/screens/public/onboarding/style';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

export function OnboardingStep4() {
  const { dispatch, goBack } = useNavigation<RootNavigationProp>();

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
            onPress={() =>
              dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'SignIn' }],
                }),
              )
            }
            iconRight={<ChevronRight color={theme.colors.neutrals[50]} />}
          />
        </View>
      </View>
    </Container>
  );
}
