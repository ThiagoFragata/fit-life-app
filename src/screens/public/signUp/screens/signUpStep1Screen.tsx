import useSignUpViewModel from '../viewModels/signUpViewModel';
import SignUpStep1View from '../views/signUpStep1';

const SignUpStep1Screen: React.FC = () => {
  const viewModel = useSignUpViewModel();

  return <SignUpStep1View {...viewModel} />;
};

export default SignUpStep1Screen;
