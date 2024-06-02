import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

import { SignUpService } from '../services/sign-up.service';

import { useAuthStore } from '@/common/stores/useAuthStore';

interface Credentials {
  email: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  role: 'ADMIN' | 'GYM' | 'DEFAULT';
  password: string;
}

export function useSignUpMutation() {
  const { onAuthenticated } = useAuthStore();

  return useMutation({
    mutationFn: async (credentials: Credentials) => {
      const { accessToken, message } = await SignUpService.signUp(credentials);
      return { accessToken, message };
    },
    onError: (error) => {
      Alert.alert('Ops, algo deu errado!', error.message);
    },
    onSuccess: (data) => {
      Alert.alert(data.message);
      onAuthenticated(data.accessToken);
    },
  });
}
