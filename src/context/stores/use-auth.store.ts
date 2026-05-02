// src/stores/auth.store.ts
import { UserResponse } from '@/types/user-response';
import { create } from 'zustand';

type AuthState = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
