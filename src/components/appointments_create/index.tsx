import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { CategorySelect } from '../category_select';
import { Background } from '../background';
import { theme } from '../../global/styles/theme';
import { styles } from './styles'
import { Header } from '../header';
import { GuildIcon } from '../guild_icon';

export function AppointmentsCreate() {
    const [category, setCategory] = useState('');
    return (
        <Background >
            <Header title='Agendar partidas' />
            <Text style={styles.label}>
                Categoria
            </Text>
            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                CategorySelected={category}
            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        {
                            // <View style={styles.image} />
                            <GuildIcon />
                        }
                        <View style={styles.selectBody}>

                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>
                        <Feather name='chevron-right' color={theme.colors.heading} size={18}></Feather>

                    </View>
                </RectButton>
            </View>
        </Background>
    );
}