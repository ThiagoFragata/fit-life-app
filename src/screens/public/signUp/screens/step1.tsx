import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { style as s } from '@/screens/public/signUp/styles';
import { RootNavigationProp } from '@/types/screens';

export function SignUpStep1() {
  const { navigate } = useNavigation<RootNavigationProp>();

  return (
    <Container>
      <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
        <Logo />

        <Text style={s.caption}>1 de 2</Text>
        <Text style={s.title}>Junte-se a nós, Não se preocupe, é rápido e fácil!</Text>

        <View style={s.form}>
          <View style={s.formItem}>
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="Sobrenome" placeholder="Digite seu sobrenome" />
          </View>

          <Input label="Username" placeholder="Crie um username" />
        </View>

        <View style={s.formFooter}>
          <View style={s.btnContainer}>
            <Button label="Continuar" textMode="dark" onPress={() => navigate('SignUp2')} />
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
