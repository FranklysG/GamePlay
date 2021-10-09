import React, { useEffect, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, Text, View, Image, FlatList, Alert, Share, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';


import BannerImg from '../../assets/banner.png';
import ButtonIcon from '../../components/buttonIcon'
import { Background } from '../../components/background';
import { ListHeader } from '../../components/list_header';
import { Member, MemberProps } from '../../components/members';
import { ListDivisor } from '../../components/list_divisor';
import { theme } from '../../global/styles/theme';
import { Header } from '../../components/header';
import { styles } from './styles';
import { useRoute } from '@react-navigation/core';
import { AppointmentsProps } from '../../components/appointments';
import { api } from '../../services/api';
import { Load } from '../../components/load';
import * as Linking from 'expo-linking';

type Params = {
    guildSelected: AppointmentsProps
}

type GuildWidget = {
    id: string,
    name: string,
    instant_invite: string,
    members: MemberProps[],
    presence_count: number
}
export function Appointments() {
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    async function fecthGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        } catch (error) {
            Alert.alert('Varifique se a opção Widget do servidor esta ativa');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInviteServer() {
        const message = Platform.OS === 'ios' ?
            `Junte-se a ${guildSelected.guild.name}` :
            widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }
    useEffect(() => {
        fecthGuildWidget();
    });

    return (
        <Background>
            <Header
                title={'Detalhes'}
                action={guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInviteServer}>
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
                <Text style={styles.title}>{guildSelected.guild.name}</Text>
                <Text style={styles.subtitle}>{guildSelected.description}</Text>
            </ImageBackground>

            {
                loading ? <Load /> :
                    <View>
                        <ListHeader
                            title='Jogadores'
                            subtitle={`Total ${widget.members.length}`}
                        />

                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={ListDivisor}
                            style={styles.members}
                        />
                    </View>
            }

            {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon
                        title={'Entrar na partida'}
                        onPress={handleOpenGuild} />
                </View>
            }
        </Background>

    );
}