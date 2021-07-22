import React, 
{ 
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";

import { api } from '../services/api';
import * as AuthSession from 'expo-auth-session';
import {
    SCOPE,
    CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from '../config'

type User = {
    id: string,
    username: string,
    avatar: string,
    email: string,
    token: string,

}

type AuthData = {
    user: User,
    signIn: () => Promise<void>,
    loading: boolean
}

type AuthProviderProps = {
    children: ReactNode,
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string,
    }
}
export const Auth = createContext({} as AuthData);

function AuthProvider({ children}: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn(){
        try {
            setLoading(true);
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            const { type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;
       
            if(type === "success"){
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get('users/@me');
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                setUser({
                    ...userInfo.data,
                    token: params.access_token
                });
                setLoading(false);
            }else{
                setLoading(false);
            }
        } catch {
            throw new Error("Não foi possivel altenticar");
        }
    }

    return (
        <Auth.Provider value={{
            user,
            signIn,
            loading
        }}>
            {children}
        </Auth.Provider>
    );
}

function useAuth() {
    const context = useContext(Auth);
    return context;
}

export {
    AuthProvider,
    useAuth
}