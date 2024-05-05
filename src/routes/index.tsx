import { NavigationContainer } from '@react-navigation/native';

import { PublicRoutes } from './app.public.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
      {/* <PrivateRoutes /> */}
    </NavigationContainer>
  );
}
