import { create } from 'zustand';

interface UserData {
  firstname: string;
  lastname: string;
  username: string;
}

interface UserStore {
  users: UserData | null;
  createUser: (userData: UserData) => void;
  clearUsers: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  users: null,
  createUser: (userData) => set({ users: userData }),
  clearUsers: () => set({ users: null }),
}));

export default useUserStore;
