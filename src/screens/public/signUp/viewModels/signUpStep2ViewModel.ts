import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { useSignUpMutation } from '../hooks/useSignUpMutation';
import { SignUpStep2Type, schemaSignUpStep2 } from '../schemas/signUpStep2Schema';
import useUserStore from '../stores/useUserStore';

import { RootNavigationProp } from '@/types/screens';

function useSignUpStep2ViewModel() {
  const { navigate } = useNavigation<RootNavigationProp>();
  const { mutate, isPending } = useSignUpMutation();
  const { user } = useUserStore();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schemaSignUpStep2),
  });

  const onSubmitAccount = (data: SignUpStep2Type) =>
    mutate({
      email: data.email,
      username: user?.username ?? null,
      firstname: user?.firstname ?? null,
      lastname: user?.lastname ?? null,
      password: data.password,
      role: 'DEFAULT',
    });

  return {
    control,
    navigate,
    isPending,
    onSubmitAccount,
    handleSubmitAccount: handleSubmit,
  };
}

export default useSignUpStep2ViewModel;
