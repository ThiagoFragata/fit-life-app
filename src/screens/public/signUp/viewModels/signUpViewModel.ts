import { useNavigation } from '@react-navigation/native';

// import { useForgotPasswordMutation } from '../hooks/useForgotPasswordMutation';

import { RootNavigationProp } from '@/types/screens';

function useSignUpViewModel() {
  const { navigate } = useNavigation<RootNavigationProp>();
  // const { mutate, isPending } = useSignUpMutation();

  // const [email, setEmail] = useState<string>('');

  // const handleSendEmail = () => {
  //   mutate({ email });
  // };

  return {
    navigate,
  };
}

export default useSignUpViewModel;
