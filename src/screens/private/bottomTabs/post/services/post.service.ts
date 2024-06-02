import { AxiosError } from 'axios';
import FormData from 'form-data';

import { PostModel, PostProps, UploadModel } from '../models/postModel';

import { ErrorModel } from '@/common/models/errorModel';
import { api } from '@/services/axios';

export class PostService {
  static async create(payload: PostProps): Promise<PostModel> {
    try {
      const { data } = await api.post(`/post`, payload);
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

  static async upload(file: FormData): Promise<UploadModel> {
    try {
      const { data } = await api.post(`/file/upload-post`, file);
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
