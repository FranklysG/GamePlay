import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, Text, View, Image, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';


import BannerImg from '../../assets/banner.png';
import ButtonIcon from '../../components/buttonIcon'
import { Background } from '../../components/background';
import { ListHeader } from '../../components/list_header';
import { Member } from '../../components/members';
import { ListDivisor } from '../../components/list_divisor';
import { theme } from '../../global/styles/theme';
import { Header } from '../../components/header';
import { styles } from './styles';

export function Appointments() {
    const members = [
        {
            id: '1',
            username: 'Tunele',
            avatar_url: 'https://github.com/franklysg.png',
            status: 'online'
        },
        
    ]
    return (
        <Background>
            <Header
                title={'Detalhes'}
                action={
                    <BorderlessButton>
                        <Fontisto
                            name={"share"}
                            size={24}
                            color={theme.colors.primary} ></Fontisto>
                    </BorderlessButton>
                }
            />

            <ImageBackground
                style={styles.banner}
                source={BannerImg}
            >
                <Text style={styles.title}>Lendarios</Text>
                <Text style={styles.subtitle}>É hoje que vamos chegar ao topo sem perder nenhuma partida</Text>
            </ImageBackground>

            <ListHeader
                title='Jogadores'
                subtitle='Total 3'
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={ListDivisor}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title={'Entrar na partida'} />
            </View>
        </Background>

    );
}