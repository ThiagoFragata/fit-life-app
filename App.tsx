import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';

import { AuthState, useAuthStore } from '@/common/stores/useAuthStore';
import { Routes } from '@/routes';
import queryClient from '@/services/query-client';

function loadAndPersistAuthState() {
  AsyncStorage.getItem('authState')
    .then((data) => {
      if (data) {
        const persistedState: AuthState = JSON.parse(data);
        useAuthStore.setState(persistedState);
        axios.defaults.headers.common['Authorization'] = persistedState.token
          ? `Bearer ${persistedState.token}`
          : '';
      }
    })
    .catch((error) => {
      console.error('Erro ao carregar o estado de autenticação:', error);
    });

  const unsubscribe = useAuthStore.subscribe((state) => {
    AsyncStorage.setItem('authState', JSON.stringify(state)).catch((error) => {
      console.error('Erro ao salvar o estado de autenticação:', error);
    });
  });

  return unsubscribe;
}

export default function App() {
  useEffect(() => {
    const unsubscribe = loadAndPersistAuthState();
    return () => unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
