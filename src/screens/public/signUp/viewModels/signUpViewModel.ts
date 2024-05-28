import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { SignUpStep1Type, schemaSignUpStep1 } from '../schemas/signUpStep1Schema';
import useUserStore from '../stores/useUserStore';

import { RootNavigationProp } from '@/types/screens';

function useSignUpViewModel() {
  const { navigate } = useNavigation<RootNavigationProp>();
  // const { mutate, isPending } = useSignUpMutation();

  // const handleSendEmail = () => {
  //   mutate({ email });
  // };

  const { createUser, clearUsers } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUpStep1),
  });

  const onSubmit = (data: SignUpStep1Type) => {
    try {
      createUser(data);
      navigate('SignUp2');
    } catch (e) {
      console.error(e);
      clearUsers();
    }
  };

  return {
    errors,
    control,
    navigate,
    onSubmit,
    handleSubmit,
  };
}

export default useSignUpViewModel;
