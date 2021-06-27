import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = {
    uri: string
}
export function GuildIcon() {
    const uri = 'https://baixapk.net/wp-content/uploads/2021/02/garena-free-fire-the-cobra.png';
    return (
        <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"/>
    );
}