import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SignUpStep2Type } from '../schemas/signUpStep2Schema';
import { style as s } from '../styles/signUpStyle';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { RootNavigationProp } from '@/types/screens';

interface SignUpStep2ViewProps {
  control: Control<SignUpStep2Type, any>;
  isPending: boolean;

  onSubmitAccount: (data: SignUpStep2Type) => void;
  navigate: RootNavigationProp['navigate'];

  handleSubmitAccount: UseFormHandleSubmit<SignUpStep2Type, undefined>;
}

const SignUpStep2View: React.FC<SignUpStep2ViewProps> = ({
  control,
  navigate,
  isPending,
  onSubmitAccount,
  handleSubmitAccount,
}: SignUpStep2ViewProps) => (
  <Container>
    <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
      <Logo />

      <Text style={s.caption}>2 de 2</Text>
      <Text style={s.title}>Quase acabando, só mais essa etapa!</Text>

      <View style={s.form}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <View style={{ flex: 1 }}>
              <Input
                label="*E-mail"
                placeholder="Informe seu melhor e-mail"
                keyboardType="email-address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              <Text style={s.textError}>{error?.message}</Text>
            </View>
          )}
          name="email"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <View style={{ flex: 1 }}>
              <Input
                label="*Senha"
                placeholder="Digite sua senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isPasswordInput
              />
              <Text style={s.textError}>{error?.message}</Text>
            </View>
          )}
          name="password"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <View style={{ flex: 1 }}>
              <Input
                label="*Confirmação de senha"
                placeholder="Repita sua senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isPasswordInput
              />
              <Text style={s.textError}>{error?.message}</Text>
            </View>
          )}
          name="confirmPassword"
        />
      </View>

      <View style={s.formFooter}>
        <View style={s.btnContainer}>
          <Button
            label={isPending ? 'Cadastrando' : 'Finalizar'}
            textMode="dark"
            disabled={isPending}
            onPress={handleSubmitAccount(onSubmitAccount)}
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

export default SignUpStep2View;
