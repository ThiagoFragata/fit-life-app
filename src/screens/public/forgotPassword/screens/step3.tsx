import { CommonActions, useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { style as s } from '@/screens/public/forgotPassword/styles';
import { RootNavigationProp } from '@/types/screens';

export function ForgotPasswordStep3() {
  const { navigate, dispatch } = useNavigation<RootNavigationProp>();

  function handleSubmit() {
    Alert.alert('Senha redefinida', 'Você já pode entrar na sua conta!', [
      {
        text: 'Entrar',
        onPress: () =>
          dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'SignIn' }],
            }),
          ),
      },
    ]);
  }

  return (
    <Container>
      <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
        <Logo />

        <Text style={s.caption}>3 de 3</Text>
        <Text style={s.title}>Crie uma senha segura e nunca divulgue com ninguém</Text>

        <View style={s.form}>
          <Input label="Senha" placeholder="Digite sua senha" />
          <Input label="Confirmação de senha" placeholder="Repita sua senha" />
        </View>

        <View style={s.formFooter}>
          <View style={s.btnContainer}>
            <Button label="Continuar" textMode="dark" onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={s.account}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigate('SignIn')}>
          <Text style={s.textAccount}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
