import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { style as s } from '../styles/signInStyle';

import { Lock, Logo, Mail } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import theme from '@/styles/theme';

interface SignInViewProps {
  email: string;
  password: string;
  isPending: boolean;

  onEmailChange: React.Dispatch<React.SetStateAction<string>>;
  onPasswordChange: React.Dispatch<React.SetStateAction<string>>;

  onSignInPress: () => void;
  onNavigate: (screen: any) => void;
}

const SignInView: React.FC<SignInViewProps> = ({
  email,
  password,
  isPending,
  onEmailChange,
  onPasswordChange,
  onSignInPress,
  onNavigate,
}) => (
  <Container>
    <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
      <Logo />

      <Text style={s.title}>Entre para se conectar com sua comunidade fitness</Text>

      <View style={s.form}>
        <Input
          icon={<Mail color={theme.colors.primary[600]} />}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          onChangeText={onEmailChange}
          value={email}
        />

        <Input
          icon={<Lock color={theme.colors.primary[600]} />}
          label="Senha"
          placeholder="Digite sua senha"
          isPasswordInput
          onChangeText={onPasswordChange}
          value={password}
        />

        <TouchableOpacity
          style={s.forgotPassword}
          onPress={() => onNavigate('ForgotPasswordStep1')}>
          <Text style={s.textForgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={s.formFooter}>
        <View style={s.btnContainer}>
          <Button label="Entrar" textMode="dark" onPress={onSignInPress} disabled={isPending} />
        </View>

        <View style={s.createAccount}>
          <Text>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={() => onNavigate('SignUp1')}>
            <Text style={s.textCreateAccount}>Crie aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  </Container>
);

export default SignInView;