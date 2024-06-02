import { AxiosError } from 'axios';

import { SignInModel } from '../models/signInModel';

import { ErrorModel } from '@/common/models/errorModel';
import { api } from '@/services/axios';

interface Credentials {
  email: string;
  password: string;
}

export class SignInService {
  static async signIn(credentials: Credentials): Promise<SignInModel> {
    try {
      const { data } = await api.post(`/auth/sign-in`, credentials);
      return data;
    } catch (error) {
      const e = error as ErrorModel;
      if (error instanceof AxiosError && e.response) {
        throw new Error(e.response.data.message);
      } else {
        throw error;
      }
    }
  }
}
