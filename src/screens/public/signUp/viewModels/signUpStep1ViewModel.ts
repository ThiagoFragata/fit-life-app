import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { SignUpStep1Type, schemaSignUpStep1 } from '../schemas/signUpStep1Schema';
import useUserStore from '../stores/useUserStore';

import { RootNavigationProp } from '@/types/screens';

function useSignUpStep1ViewModel() {
  const { navigate } = useNavigation<RootNavigationProp>();
  const { createUser, clearUsers } = useUserStore();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schemaSignUpStep1),
  });

  const onSubmitUser = (data: SignUpStep1Type) => {
    try {
      createUser(data);
      navigate('SignUp2');
    } catch (e) {
      console.error(e);
      clearUsers();
    }
  };

  return {
    control,
    navigate,
    onSubmitUser,
    handleSubmitUser: handleSubmit,
  };
}

export default useSignUpStep1ViewModel;
