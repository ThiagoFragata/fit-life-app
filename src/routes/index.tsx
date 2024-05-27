import { NavigationContainer } from '@react-navigation/native';

import { PrivateRoutes } from './app.private.routes';
import { PublicRoutes } from './app.public.routes';

import { useAuthStore } from '@/common/stores/useAuthStore';

export function Routes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
