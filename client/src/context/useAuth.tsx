import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React from 'react'; // Add this import to ensure React is in scope
import axios from 'axios';
import { UserProfile } from '../models/User';
import { loginAPI, registerAPI } from '../lib/axios';

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (username: string, email: string, password: string) => void;
  loginUser: (email: string, password: string) => void; // Corrected argument signature
  logout: () => void;
  isLoggedIn: () => boolean;
  isReady: boolean; // Add this optional property
};

type Props = {
  children: React.ReactNode; // Ensure this is correctly typed
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider = ({ children }: Props): JSX.Element | null => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false); // for protected routes

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
    } else {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsReady(true);
    }
  }, [token]);

  const registerUser = async (
    username: string,
    email: string,
    password: string,
  ) => {
    await registerAPI(username, email, password)
      .then((data) => {
        if (data) {
          setUser(data.user);
          setToken(data.accessToken);

          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.accessToken);

          toast.success('Inscription réussie');

          navigate('/connexion');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.warning("Erreur lors de l'inscription");
      });
  };

  const loginUser = async (email: string, password: string) => {
    await loginAPI(email, password)
      .then((data) => {
        if (data) {
          setUser(data.user);
          setToken(data.accessToken);

          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.accessToken);

          toast.success('Vous êtes connecté(e)');

          // Automatically add token to axios headers
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.warning('Erreur lors de la connexion');
      });
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    toast.info('Vous êtes déconnecté(e)');

    navigate('/');
  };

  // Make sure to return a valid JSX element and provide default when not ready
  return (
    <UserContext.Provider
      value={{
        user,
        token,
        registerUser,
        loginUser,
        logout,
        isLoggedIn,
        isReady,
      }}
    >
      {isReady ? children : <div>Loading...</div>}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
