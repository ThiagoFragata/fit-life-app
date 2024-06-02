import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { create } from 'zustand';

import { api } from '@/services/axios';

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  isLoading: boolean;
}

interface AuthActions {
  onAuthenticated: (token: string) => void;
  onLogout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  isAuthenticated: false,
  isLoading: true,
  token: undefined,
  onAuthenticated: (token) => {
    set({ isAuthenticated: true, token, isLoading: false });
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.response?.status === 401) {
        useAuthStore.getState().onLogout();
      }
      return Promise.reject(error);
    });
  },
  onLogout: () => {
    set({ isAuthenticated: false, token: undefined });
    delete api.defaults.headers.common['Authorization'];
  },
}));

AsyncStorage.getItem('authState')
  .then((data) => {
    if (data) {
      const persistedState: AuthState = JSON.parse(data);
      useAuthStore.setState(persistedState);
      if (persistedState.token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${persistedState.token}`;
      }
    }
  })
  .catch((error) => {
    console.error('Erro ao carregar o estado de autenticação:', error);
  });

useAuthStore.subscribe((state) => {
  AsyncStorage.setItem('authState', JSON.stringify(state)).catch((error) => {
    console.error('Erro ao salvar o estado de autenticação:', error);
  });
});
