import React, 
{ useState, useEffect } from 'react';

import { 
    View, FlatList
} from 'react-native'; 

import { Guild, GuildProps } from '../../components/guild';
import { ListDivisor } from '../../components/list_divisor';
import { Load } from '../../components/load';
import { api } from '../../services/api';
import { styles } from './styles';

type Props = {
    handleGuildeSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildeSelect }: Props){
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);
    
    async function fetchGuilds(){
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchGuilds();
    });
    return (
        <View style={styles.cotnainer}>
            {
                loading ? <Load /> : 
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
            }
        </View>
    );
}
