import { Alert } from 'react-native';

import { useAuthStore } from '@/common/stores/useAuthStore';

function useHomeViewModel() {
  const { onLogout } = useAuthStore();

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
  };
}

export default useHomeViewModel;
