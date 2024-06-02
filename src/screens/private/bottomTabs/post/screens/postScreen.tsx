import PostView from '../view/postView';
import usePostViewModel from '../viewModel/postViewModel';

const PostScreen: React.FC = () => {
  const viewModel = usePostViewModel();

  return <PostView {...viewModel} />;
};

export default PostScreen;
