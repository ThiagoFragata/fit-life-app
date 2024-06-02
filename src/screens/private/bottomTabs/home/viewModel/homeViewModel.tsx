import { Alert } from 'react-native';

import { usePostsQuery } from '../hooks/usePostsQuery';

import { useAuthStore } from '@/common/stores/useAuthStore';

function useHomeViewModel() {
  const { onLogout } = useAuthStore();
  const { data, isLoading, isRefetching, refetch } = usePostsQuery();

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: onLogout,
        },
      ],
      { cancelable: true },
    );
  };

  return {
    handleLogout,
    refetch,
    data,
    isLoading,
    isRefetching,
  };
}

export default useHomeViewModel;
