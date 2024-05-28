import * as yup from 'yup';

export const schemaSignUpStep2 = yup
  .object({
    email: yup.string().email('Digite uma e-mail válido!').required('Esse campo é obrigatório!'),
    password: yup
      .string()
      .required('Esse campo é obrigatório!')
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
      ),
    confirmPassword: yup
      .string()
      .required('Esse campo é obrigatório!')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required();

export type SignUpStep2Type = yup.InferType<typeof schemaSignUpStep2>;
