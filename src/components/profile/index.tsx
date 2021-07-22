import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../avatar';

import { styles } from './styles';
export function Profile() {
    const { user } = useAuth();
    return (
        <View style={styles.container}>

            <Avatar urlImage={user.avatar} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Opa
                    </Text>
                    <Text style={styles.username}>
                        { user.username }
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de festa
                </Text>
            </View>
        </View>
    );
}