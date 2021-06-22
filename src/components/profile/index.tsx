import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../avatar';
import { styles } from './styles';
export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage={theme.img.avatar} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Opa
                    </Text>
                    <Text style={styles.username}>
                        Tunele
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de festa
                </Text>
            </View>
        </View>
    );
}