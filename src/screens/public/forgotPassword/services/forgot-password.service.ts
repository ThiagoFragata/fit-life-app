import { AxiosError } from 'axios';

import { ForgotPasswordModel } from '../models/forgotPasswordModel';

import { ErrorModel } from '@/common/models/errorModel';
import { api } from '@/services/axios';

export class ForgotPasswordService {
  static async forgotPassword(email: string): Promise<ForgotPasswordModel> {
    try {
      const { data } = await api.post(`/auth/forgot-password`, { email });
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
