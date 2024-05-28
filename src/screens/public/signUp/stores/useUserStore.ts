import { create } from 'zustand';

interface UserData {
  firstname: string;
  lastname: string;
  username: string;
}

interface UserStore {
  user: UserData | null;
  createUser: (userData: UserData) => void;
  clearUsers: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  createUser: (userData) => set({ user: userData }),
  clearUsers: () => set({ user: null }),
}));

export default useUserStore;
