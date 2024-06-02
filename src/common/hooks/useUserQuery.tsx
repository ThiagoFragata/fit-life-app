import { useQuery } from '@tanstack/react-query';

import { UserService } from '../services/user.service';

export function useUserQuery() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      return UserService.get();
    },
  });
}
