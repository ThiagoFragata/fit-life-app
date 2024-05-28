import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { style as s } from '../styles/forgotPasswordStyle';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { RouteNameList } from '@/types/screens';

interface ForgotPasswordViewProps {
  email: string;
  onEmailChange: React.Dispatch<React.SetStateAction<string>>;
  isPending: boolean;

  navigate: (screen: RouteNameList) => void;
  handleSendEmail: () => void;
}

const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = ({
  email,
  navigate,
  isPending,
  onEmailChange,
  handleSendEmail,
}: ForgotPasswordViewProps) => (
  <Container>
    <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
      <Logo />

      <Text style={s.title}>Esqueceu sua senha? informe seu e-mail ou username</Text>

      <View style={s.form}>
        <Input
          label="E-mail"
          keyboardType="email-address"
          placeholder="Informe seu e-mail"
          value={email}
          onChangeText={onEmailChange}
        />
      </View>

      <View style={s.formFooter}>
        <View style={s.btnContainer}>
          <Button
            textMode="dark"
            label={isPending ? 'Enviando…' : 'Enviar'}
            onPress={handleSendEmail}
            disabled={isPending}
          />
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

export default ForgotPasswordView;
