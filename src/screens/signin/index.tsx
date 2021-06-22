import React from 'react';
import { 
    View,
    Text,
    Image,
} from 'react-native'; 

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/buttonIcon';

export function SignIn(){
    const navigation = useNavigation();
    
    function handleSignIn(){
        navigation.navigate('Home');
    }

    return (
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

                <ButtonIcon 
                    title="Conecte-se com seu Discord"
                    onPress={handleSignIn} />
            </View>
        </View>
    );
}
