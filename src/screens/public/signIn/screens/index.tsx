import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Lock, Logo, Mail } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/screens/public/signIn/components/input';
import { style as s } from '@/screens/public/signIn/styles';
import theme from '@/styles/theme';

export function SignIn() {
  return (
    <Container>
      <ScrollView style={s.content} showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity style={s.forgotPassword}>
            <Text style={s.textForgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <View style={s.formFooter}>
          <View style={s.btnContainer}>
            <Button label="Entrar" textMode="dark" />
          </View>

          <View style={s.createAccount}>
            <Text>Ainda não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={s.textCreateAccount}>Crie aqui</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
