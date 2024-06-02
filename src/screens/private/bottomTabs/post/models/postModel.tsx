import FormData from 'form-data';
import * as yup from 'yup';

export const postSchema = yup
  .object({
    title: yup.string().required('O título da publicação é obrigatório'),
    description: yup.string().required('A descrição da publicação é obrigatória'),
  })
  .required();

export type PostType = yup.InferType<typeof postSchema>;

export interface PostModel {
  id: number;
  authorId: number;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface UsePostMutationProps {
  title: string;
  description: string;
  file: FormData;
}

export interface PostProps {
  title: string;
  description: string;
  photo: string;
  authorId: number;
}
