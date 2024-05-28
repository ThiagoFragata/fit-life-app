import useForgotPasswordViewModel from '../viewModels/forgotPasswordViewModel';
import ForgotPasswordView from '../views/forgotPasswordView';

const ForgotPasswordScreen: React.FC = () => {
  const viewModel = useForgotPasswordViewModel();

  return <ForgotPasswordView {...viewModel} />;
};

export default ForgotPasswordScreen;
