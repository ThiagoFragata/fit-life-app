import useSignUpViewModel from '../viewModels/signUpViewModel';
import SignUpStep2View from '../views/signUpStep2';

const SignUpStep2Screen: React.FC = () => {
  const viewModel = useSignUpViewModel();

  return <SignUpStep2View {...viewModel} />;
};

export default SignUpStep2Screen;
