import useSignUpStep1ViewModel from '../viewModels/signUpStep1ViewModel';
import SignUpStep1View from '../views/signUpStep1';

const SignUpStep1Screen: React.FC = () => {
  const viewModel = useSignUpStep1ViewModel();

  return <SignUpStep1View {...viewModel} />;
};

export default SignUpStep1Screen;
