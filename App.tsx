import { QueryClientProvider } from '@tanstack/react-query';

import { Routes } from '@/routes';
import queryClient from '@/services/query-client';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
