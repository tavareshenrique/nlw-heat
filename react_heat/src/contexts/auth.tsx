import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

interface AuthContextData {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface IAuthResponse {
  token: string;
  user: User;
}

interface AuthProvider {
  children: ReactNode;
}

const storageKey = '@dowhile:token';

export function AuthProvider({ children }: AuthProvider) {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.VITE_GITHUB_CLIENT_ID}`;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(storageKey);

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('/profile').then(response => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    async function signIn(githubCode: string) {
      const response = await api.post<IAuthResponse>('authenticate', {
        code: githubCode,
      });

      const { token, user: userData } = response.data;

      localStorage.setItem(storageKey, token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(userData);
    }

    const url = window.location.href;
    const hasCode = url.includes('code=');

    if (hasCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, []);

  function signOut() {
    setUser(null);
    localStorage.removeItem(storageKey);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInUrl,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
