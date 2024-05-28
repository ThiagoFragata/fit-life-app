import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SignUpStep1Type } from '../schemas/signUpStep1Schema';
import { style as s } from '../styles/signUpStyle';

import { Logo } from '@/assets';
import { Button } from '@/components/atoms/button-default';
import { Container } from '@/components/atoms/container';
import { Input } from '@/components/atoms/input';
import { RouteNameList } from '@/types/screens';

interface SignUpStep1ViewProps {
  control: Control;

  onSubmit: (data: SignUpStep1Type) => void;
  navigate: (screen: RouteNameList) => void;

  handleSubmit: UseFormHandleSubmit<SignUpStep1Type, undefined>;
}

const SignUpStep1View: React.FC<SignUpStep1ViewProps> = ({
  navigate,
  control,
  handleSubmit,
  onSubmit,
}: SignUpStep1ViewProps) => (
  <Container>
    <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
      <Logo />

      <Text style={s.caption}>1 de 2</Text>
      <Text style={s.title}>Junte-se a nós, Não se preocupe, é rápido e fácil!</Text>

      <View style={s.form}>
        <View style={s.formItem}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <View style={{ flex: 1 }}>
                <Input
                  label="*Nome"
                  placeholder="Digite seu nome"
                  autoCapitalize="sentences"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Text style={s.textError}>{error?.message}</Text>
              </View>
            )}
            name="firstname"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <View style={{ flex: 1 }}>
                <Input
                  label="*Sobrenome"
                  placeholder="Digite seu sobrenome"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Text style={s.textError}>{error?.message}</Text>
              </View>
            )}
            name="lastname"
          />
        </View>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({
            field: { onChange, onBlur, value },
            formState: { errors },
            fieldState: { error },
          }) => (
            <View>
              <Input
                label="*Username"
                placeholder="Crie seu username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              <Text style={s.textError}>{error?.message}</Text>
              <Text>{errors.root?.message}</Text>
            </View>
          )}
          name="username"
        />
      </View>

      <View style={s.formFooter}>
        <View style={s.btnContainer}>
          <Button label="Continuar" textMode="dark" onPress={handleSubmit(onSubmit)} />
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

export default SignUpStep1View;
