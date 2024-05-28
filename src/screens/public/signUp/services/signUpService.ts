import { AxiosError } from 'axios';

import { SignUpModel } from '../models/signUpModel';

import { ErrorModel } from '@/common/models/errorModel';
import { api } from '@/services/axios';

interface Credentials {
  email: string;
  password: string;
}

export class SignUpService {
  static async signUp(credentials: Credentials): Promise<SignUpModel> {
    try {
      const { data } = await api.post(`/auth/sign-up`, credentials);
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
