import React from 'react';
import { View, Image } from 'react-native';
import Svg from 'react-native-svg';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';
const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string,
    iconId: string | null
}
export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    // const img = 'https://baixapk.net/wp-content/uploads/2021/02/garena-free-fire-the-cobra.png';
    return (
        <View>
            {
                iconId
                ?
                    <Image 
                    source={{ uri }}
                    style={styles.image}
                    resizeMode="cover"/> 
                : 
                    <DiscordSvg width={40} height={40}/>
            }
        </View>
    );
}