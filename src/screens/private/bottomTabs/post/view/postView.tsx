import { ContainerHome } from '@/components/atoms/container-home';
import { HeaderScreen } from '@/components/atoms/header';

interface PostViewProps {}

const PostView: React.FC<PostViewProps> = () => (
  <ContainerHome>
    <HeaderScreen screenLabel="Publicação" />
  </ContainerHome>
);

export default PostView;
