import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { style as s } from '../styles/signUpStyle';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { RouteNameList } from '@/types/screens';

interface SignUpStep2ViewProps {
  navigate: (screen: RouteNameList) => void;
}

const SignUpStep2View: React.FC<SignUpStep2ViewProps> = ({ navigate }: SignUpStep2ViewProps) => (
  <Container>
    <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
      <Logo />

      <Text style={s.caption}>2 de 2</Text>
      <Text style={s.title}>Quase acabando, só mais essa etapa!</Text>

      <View style={s.form}>
        <Input label="E-mail" placeholder="Informe seu melhor e-mail" />
        <Input label="Senha" placeholder="Digite sua senha" />
        <Input label="Confirmação de senha" placeholder="Repita sua senha" />
      </View>

      <View style={s.formFooter}>
        <View style={s.btnContainer}>
          <Button label="Continuar" textMode="dark" />
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

export default SignUpStep2View;
