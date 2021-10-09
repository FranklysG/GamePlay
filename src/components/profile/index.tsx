import React from 'react';
import { View, Text, Alert } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../avatar';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
export function Profile() {
    const { user, singOut } = useAuth();

    function handleSingOut() {
        Alert.alert('Logout', 'Deseja sair mesmo',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => singOut()
            },
        ]);
    }
    return (
        <View style={styles.container}>
            <RectButton onPress={handleSingOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Opa
                    </Text>
                    <Text style={styles.username}>
                        {user.username}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de festa
                </Text>
            </View>
        </View>
    );
}