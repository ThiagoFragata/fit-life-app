import { ReactElement, useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { styleInput as s } from '@/screens/public/signIn/styles/style.input';

interface InputProps extends TextInputProps {
  label: string;
  icon: ReactElement;
  isPasswordInput?: boolean;
}

export function Input({ label, icon, isPasswordInput = false, ...props }: InputProps) {
  const [keyboardSecure, setKeyboardSecure] = useState(isPasswordInput);

  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.input}>
        {icon}
        <TextInput style={s.textInput} secureTextEntry={keyboardSecure} {...props} />
        {isPasswordInput && (
          <TouchableOpacity onPress={() => setKeyboardSecure((prev) => !prev)}>
            {keyboardSecure ? <Text>mostrar senha</Text> : <Text>esconder senha</Text>}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
