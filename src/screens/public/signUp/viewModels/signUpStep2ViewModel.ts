import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { SignUpStep2Type, schemaSignUpStep2 } from '../schemas/signUpStep2Schema';

import { RootNavigationProp } from '@/types/screens';

function useSignUpStep2ViewModel() {
  const { navigate } = useNavigation<RootNavigationProp>();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schemaSignUpStep2),
  });

  const onSubmitAccount = (data: SignUpStep2Type) => console.log(data);

  return {
    control,
    navigate,
    onSubmitAccount,
    handleSubmitAccount: handleSubmit,
  };
}

export default useSignUpStep2ViewModel;
