import React, { createContext, ReactNode, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

interface AuthContextData {
  user: User | null;
  isSignIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface IAuthResponse {
  token: string;
  user: User;
}

interface IAuthorizationResponse {
  params: {
    code?: string;
    error?: string;
  };
  type?: string;
}

interface AuthProvider {
  children: ReactNode;
}

const USER_STORAGE_KEY = '@nlwheat:user';
const TOKEN_STORAGE_KEY = '@nlwheat:token';

export function AuthProvider({ children }: AuthProvider) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {
      const authUrl = `https://github.com/login/oauth/authorize?scope=read:user&client_id=${process.env.GITHUB_CLIENT_ID}`;

      setIsSignIn(true);

      const authSessionResponse = (await AuthSession.startAsync({
        authUrl,
      })) as IAuthorizationResponse;

      if (
        authSessionResponse.type === 'success' &&
        authSessionResponse.params.error !== 'access_denied'
      ) {
        const { data } = await api.post<IAuthResponse>('/authenticate', {
          code: authSessionResponse.params.code,
        });

        api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

        await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        await AsyncStorage.setItem(TOKEN_STORAGE_KEY, data.token);

        setUser(data.user);
      }

      setIsSignIn(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSignIn(false);
    }
  }

  async function signOut() {
    setUser(null);

    await AsyncStorage.removeItem(USER_STORAGE_KEY);
    await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  useEffect(() => {
    async function loadUSerStorageData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE_KEY);
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE_KEY);

      if (userStorage && tokenStorage) {
        api.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;

        setUser(JSON.parse(userStorage));
      }

      setIsSignIn(false);
    }

    loadUSerStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
