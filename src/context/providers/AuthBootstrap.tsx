// src/app/AuthProvider.tsx
'use client';

import { useCookies } from '@/hooks/use-cookies';
import { useEffect } from 'react';
import { useAuthStore } from '../stores/use-auth.store';

export function AuthBootstrap() {
  const setUser = useAuthStore((s) => s.setUser);
  const { getCookieParse } = useCookies();
  const data = getCookieParse("user")
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return null;
}