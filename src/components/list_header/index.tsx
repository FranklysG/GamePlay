import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
type Porps = { 
    title: string;
    subtitle: string;
}

export function ListHeader({title, subtitle} : Porps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                { title }
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );
}