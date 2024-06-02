import ProfileView from '../view/profileView';
import useProfileViewModel from '../viewModel/profileViewModel';

const ProfileScreen: React.FC = () => {
  const viewModel = useProfileViewModel();

  return <ProfileView {...viewModel} />;
};

export default ProfileScreen;
