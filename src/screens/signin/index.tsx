import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';

import { Background } from '../../components/background';
import { styles } from './styles';

import { useAuth } from '../../hooks/auth'

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/buttonIcon';
import { createContext } from 'react';
import { theme } from '../../global/styles/theme';

export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
            <View style={styles.cotnainer}>

                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Entre e {'\n'}
                        Organize seus Games
                    </Text>
                    <Text style={styles.subTitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos agora
                    </Text>

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} /> :
                        <ButtonIcon
                        title="Conecte-se com seu Discord"
                        onPress={handleSignIn} />
                        }
                </View>
            </View>
        </Background>
    );
}
