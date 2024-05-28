import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface OnboardingState {
  isViewOnboarding: boolean;
  onViewOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingState>()((set) => ({
  isViewOnboarding: false,
  onViewOnboarding: () => set({ isViewOnboarding: true }),
}));

async function loadOnboardingState() {
  try {
    const storedState = await AsyncStorage.getItem('onboardingState');
    if (storedState) {
      const parsedState: OnboardingState = JSON.parse(storedState);
      if (typeof parsedState.isViewOnboarding === 'boolean') {
        useOnboardingStore.setState(parsedState);
      } else {
        console.warn('Invalid onboarding state in storage');
      }
    }
  } catch (error) {
    console.error('Error loading onboarding state:', error);
  }
}

useOnboardingStore.subscribe(async (state) => {
  try {
    await AsyncStorage.setItem('onboardingState', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving onboarding state:', error);
  }
});

loadOnboardingState();
