import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IContext, IAuthProvider, IUser } from './types';
import { KEY_TOKEN } from '../utils/asyncStorageKeys';

export const AuthContext = createContext({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser | null>();
    const [isLoadingAuth, setIsLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => {
        const loadAsync = async () => {
            const tokenFromStorage = await AsyncStorage.getItem(KEY_TOKEN);

            if (tokenFromStorage) {
                try {
                    const response = await api.get("/me", {
                        headers: {
                            "Authorization": `Bearer ${tokenFromStorage}`
                        }
                    })

                    api.defaults.headers["Authorization"] = `Bearer ${tokenFromStorage}`
                    setUser(response.data);
                } catch (error) {
                    setUser(null);
                } finally {
                    setLoading(false);
                }
            }

            setLoading(false);
        }

        loadAsync();
    }, []);

    const signUp = async (name: string, email: string, password: string) => {
        setIsLoadingAuth(true);

        try {
            await api.post('/users', {
                name,
                email,
                password
            })

            navigation.goBack();
        } catch (error) {
            console.log("ERRO AO CADASTRAR -> ",error);
        } finally {
            setIsLoadingAuth(false);
        }
    };

    const signIn = async (email: string, password: string) => {
        setIsLoadingAuth(true);

        try {
            const response = await api.post("/login", {
                email,
                password
            })

            const payload = {
                id: response.data.id,
                name: response.data.name,
                email
            }
            
            if (payload.id) {
                setUser(payload);
                api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`
                AsyncStorage.setItem(KEY_TOKEN, response.data.token);
            }            
        } catch (error) {
            console.log("ERRO AO LOGAR -> ", error);
        } finally {
            setIsLoadingAuth(false);
        }
    };

    const signOut = async () => {
        await AsyncStorage.removeItem(KEY_TOKEN);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{signed: !!user, ...user, signUp, signIn, signOut, isLoadingAuth, loading}}>
            {children}
        </AuthContext.Provider>
    );
};