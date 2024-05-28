import * as yup from 'yup';

export const schemaSignUpStep1 = yup
  .object({
    firstname: yup.string().required('Esse campo é obrigatório!'),
    lastname: yup.string().required('Esse campo é obrigatório!'),
    username: yup.string().required('Esse campo é obrigatório!'),
  })
  .required();

export type SignUpStep1Type = yup.InferType<typeof schemaSignUpStep1>;
