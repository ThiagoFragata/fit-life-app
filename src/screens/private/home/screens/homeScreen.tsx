import HomeView from '../view/homeView';
import useHomeViewModel from '../viewModel/homeViewModel';

const HomeScreen: React.FC = () => {
  const viewModel = useHomeViewModel();

  return <HomeView {...viewModel} />;
};

export default HomeScreen;
