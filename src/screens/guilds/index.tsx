import React from 'react';
import { 
    View, FlatList
} from 'react-native'; 

import { Guild, GuildProps } from '../../components/guild';
import { ListDivisor } from '../../components/list_divisor';
import { styles } from './styles';

type Props = {
    handleGuildeSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildeSelect }: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendarios',
            icon: null,
            status: 'on',
            owner: true
        },{
            id: '2',
            name: 'Avengers',
            icon: null,
            status: 'on',
            owner: true
        },{
            id: '3',
            name: 'Cracher`s',
            icon: null,
            status: 'on',
            owner: true
        }
    ]
    return (
        <View style={styles.cotnainer}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item }) => (
                        <Guild 
                        data={item} 
                        onPress={() => handleGuildeSelect(item)} />
                    )
                }
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivisor />}
                style={styles.guild} />
        
        </View>
    );
}
