import React, { useState } from 'react';
import { 
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native'; 

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/buttonIcon';
import { styles } from './styles';

export function SignIn(){
    return (
        <View style={styles.cotnainer}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="trasparent"
                translucent
            />
            <Image 
                source={IllustrationImg}
                style={styles.image} 
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {'\n'}
                    suas jogatinas {'\n'}
                    facilmente
                </Text>
                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos agora
                </Text>

                <ButtonIcon title="Conecte-se com seu Discord"/>
            </View>
        </View>
    );
}