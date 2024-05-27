import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';
import { create } from 'zustand';

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
}

interface AuthActions {
  onAuthenticated: (token: string) => void;
  onLogout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  isAuthenticated: false,
  token: undefined,
  onAuthenticated: (token) => {
    set({ isAuthenticated: true, token });
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Adiciona um interceptador para verificar error de token inválido
    axios.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.response?.status === 401) {
        useAuthStore.getState().onLogout();
      }
      return Promise.reject(error);
    });
  },
  onLogout: () => {
    set({ isAuthenticated: false, token: undefined });
    delete axios.defaults.headers.common['Authorization'];
  },
}));

AsyncStorage.getItem('authState')
  .then((data) => {
    if (data) {
      const persistedState: AuthState = JSON.parse(data);
      useAuthStore.setState(persistedState);
      if (persistedState.token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${persistedState.token}`;
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
