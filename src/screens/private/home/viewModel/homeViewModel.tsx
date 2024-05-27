import { useAuthStore } from '@/common/stores/useAuthStore';

function useHomeViewModel() {
  const { onLogout } = useAuthStore();

  return {
    onLogout,
  };
}

export default useHomeViewModel;
