import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Profile } from '../../components/profile';
import { ButtonAdd } from '../../components/button_add';
import { ListHeader } from '../../components/list_header';
import { CategorySelect } from '../../components/category_select';
import { Appointments } from '../../components/appointments';
import { ListDivisor } from '../../components/list_divisor';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao top sem perder nenhuma partida'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao top sem perder nenhuma partida'
        },
    ]
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    } 

    function hendleAppointments() {
        navigation.navigate('Appointments');
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                CategorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox={false}/>

            <View style={styles.content}>
                <ListHeader
                    title={'Partidas agendadas'}
                    subtitle={'Total 6'} />

                <FlatList
                    ItemSeparatorComponent={() => <ListDivisor />}
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointments
                            data={item}
                            onPress={hendleAppointments}
                        />
                    )}
                />
            </View>
        </View>

    );
}