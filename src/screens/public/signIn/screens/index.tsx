import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Lock, Logo, Mail } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { style as s } from '@/screens/public/signIn/styles';
import theme from '@/styles/theme';
import { RootNavigationProp } from '@/types/screens';

export function SignIn() {
  const { navigate } = useNavigation<RootNavigationProp>();

  return (
    <Container>
      <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
        <Logo />

        <Text style={s.title}>Entre para se conectar com sua comunidade fitness</Text>

        <View style={s.form}>
          <Input
            icon={<Mail color={theme.colors.primary[600]} />}
            label="Email"
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
          />

          <Input
            icon={<Lock color={theme.colors.primary[600]} />}
            label="Senha"
            placeholder="Digite sua senha"
            isPasswordInput
          />
          <TouchableOpacity
            style={s.forgotPassword}
            onPress={() => navigate('ForgotPasswordStep1')}>
            <Text style={s.textForgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <View style={s.formFooter}>
          <View style={s.btnContainer}>
            <Button label="Entrar" textMode="dark" />
          </View>

          <View style={s.createAccount}>
            <Text>Ainda não tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigate('SignUp1')}>
              <Text style={s.textCreateAccount}>Crie aqui</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}
