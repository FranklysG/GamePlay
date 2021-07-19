import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SmallInput } from '../../components/small_input';
import { TextArea } from '../../components/textarea';
import { Button } from '../../components/button';
import { Guilds } from '../../screens/guilds';
import { RectButton } from 'react-native-gesture-handler';
import { CategorySelect } from '../category_select';
import { Background } from '../background';
import { ModalView } from '../modal_view';
import { theme } from '../../global/styles/theme';
import { styles } from './styles'
import { Header } from '../header';
import { GuildIcon } from '../guild_icon';
import { GuildProps } from '../../components/guild';

export function AppointmentsCreate() {
    const [category, setCategory] = useState('');
    const [openGuild, setOpenGuild] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuild() {
        setOpenGuild(true);
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenGuild(false);
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
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
                        <RectButton onPress={handleOpenGuild}>
                            <View style={styles.select}>
                                {
                                    guild.icon ? <View style={styles.image} /> : <GuildIcon />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>
                                <Feather name='chevron-right' color={theme.colors.heading} size={18}></Feather>

                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={styles.titleInput}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divisor}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.titleInput}>
                                    Horario
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divisor}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.titleInput}>
                                Descrição
                            </Text>
                            <Text style={styles.limitCaracter}>
                                Max: 100 Caracteres
                            </Text>
                        </View>
                        <TextArea
                            multiline maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false} />
                    </View>
                    <View style={styles.footer}>
                        <Button title="Agendar" />
                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openGuild}>
                <Guilds handleGuildeSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}