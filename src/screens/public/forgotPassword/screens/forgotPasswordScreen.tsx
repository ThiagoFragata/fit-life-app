import ForgotPasswordView from '../view/forgotPasswordView';
import useForgotPasswordViewModel from '../viewModel/forgotPasswordViewModel';

const ForgotPasswordScreen: React.FC = () => {
  const viewModel = useForgotPasswordViewModel();

  return <ForgotPasswordView {...viewModel} />;
};

export default ForgotPasswordScreen;
