import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { style as s } from '@/screens/public/forgotPassword/styles';
import { RootNavigationProp } from '@/types/screens';

export function ForgotPasswordStep1() {
  const { navigate } = useNavigation<RootNavigationProp>();

  return (
    <Container>
      <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
        <Logo />

        <Text style={s.caption}>1 de 3</Text>
        <Text style={s.title}>Esqueceu sua senha? informe seu e-mail ou username</Text>

        <View style={s.form}>
          <Input label="E-mail" placeholder="Informe seu e-mail ou username" />
        </View>

        <View style={s.formFooter}>
          <View style={s.btnContainer}>
            <Button
              label="Continuar"
              textMode="dark"
              onPress={() => navigate('ForgotPasswordStep2')}
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
}
