import * as yup from 'yup';

export const postSchema = yup
  .object({
    title: yup.string().required('O título da publicação é obrigatório'),
    description: yup.string(),
  })
  .required();

export type PostType = yup.InferType<typeof postSchema>;
