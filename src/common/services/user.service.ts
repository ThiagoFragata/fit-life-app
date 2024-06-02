import { AxiosError } from 'axios';

import { UserResponse } from '../models/userModel';

import { ErrorModel } from '@/common/models/errorModel';
import { api } from '@/services/axios';

export class UserService {
  static async get(): Promise<UserResponse> {
    try {
      const { data } = await api.get(`/auth/me`);
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
