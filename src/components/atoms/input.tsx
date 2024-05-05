import { ReactElement, useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputProps extends TextInputProps {
  label: string;
  icon?: ReactElement;
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

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontWeight: '500',
    fontSize: RFValue(12),
    marginBottom: RFValue(4),
  },
  input: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFValue(999),
    paddingHorizontal: RFValue(8),
  },
  textInput: {
    flex: 1,
    padding: RFValue(12),
  },
});
