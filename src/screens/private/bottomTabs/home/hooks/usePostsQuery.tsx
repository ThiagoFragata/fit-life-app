import { useQuery } from '@tanstack/react-query';

import { HomeService } from '../services/home.service';

export function usePostsQuery() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      return HomeService.list();
    },
  });
}
