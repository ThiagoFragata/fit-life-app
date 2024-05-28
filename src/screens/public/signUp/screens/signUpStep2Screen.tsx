import useSignUpStep2ViewModel from '../viewModels/signUpStep2ViewModel';
import SignUpStep2View from '../views/signUpStep2';

const SignUpStep2Screen: React.FC = () => {
  const viewModel = useSignUpStep2ViewModel();

  return <SignUpStep2View {...viewModel} />;
};

export default SignUpStep2Screen;
