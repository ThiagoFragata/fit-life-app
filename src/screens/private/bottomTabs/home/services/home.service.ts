import { AxiosError } from 'axios';

import { Posts } from '../models/homeModel';

import { ErrorModel } from '@/common/models/errorModel';
import { api } from '@/services/axios';

export class HomeService {
  static async list(): Promise<Posts> {
    try {
      const { data } = await api.get(`/post`);
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
