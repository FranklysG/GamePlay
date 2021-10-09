import React, 
{ 
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from "react";

import { api } from '../services/api';
import { COLLETION_APPOINTMENTS, COLLETION_USER } from '../configs/database';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

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
    singOut: () => Promise<void>,
    loading: boolean
}

type AuthProviderProps = {
    children: ReactNode,
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token ?: string,
        error ?: string
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
       
            if(type === "success" && !params.error){
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get('users/@me');
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                const userData = {
                    ...userInfo.data,
                    token: params.access_token
                }
                await AsyncStorage.setItem(COLLETION_USER, JSON.stringify(userData));
                setUser(userData);
            }
        } catch {
            throw new Error("Não foi possivel altenticar");
        } finally {
            setLoading(false);
        }
    }

    async function singOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(COLLETION_USER);
    }

    async function loadUserStorageData(){
        const storage = await AsyncStorage.getItem(COLLETION_USER);
        if(storage){
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <Auth.Provider value={{
            user,
            signIn,
            singOut,
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