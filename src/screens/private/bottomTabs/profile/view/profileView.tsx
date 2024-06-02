import { ContainerHome } from '@/components/atoms/container-home';
import { HeaderScreen } from '@/components/atoms/header';

interface ProfileViewProps {}

const ProfileView: React.FC<ProfileViewProps> = () => (
  <ContainerHome>
    <HeaderScreen backLabel="Home" screenLabel="Perfil" />
  </ContainerHome>
);

export default ProfileView;
