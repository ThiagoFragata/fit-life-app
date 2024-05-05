import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface useOnboardingStoreProps {
  isViewOnboarding: boolean;
  onViewOnboarding: () => void;
}

export const useOnboardingStore = create<useOnboardingStoreProps>()((set) => ({
  isViewOnboarding: false,
  onViewOnboarding: () => set({ isViewOnboarding: true }),
}));

AsyncStorage.getItem('onboardingState').then((data) => {
  if (data) {
    const persistedState = JSON.parse(data);
    useOnboardingStore.setState(persistedState);
  }
});

useOnboardingStore.subscribe((state) => {
  AsyncStorage.setItem('onboardingState', JSON.stringify(state));
});
