import { NavigationContainer } from '@react-navigation/native';

import { PublicRoutes } from '@/routes/app.public.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
