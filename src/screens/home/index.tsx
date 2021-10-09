import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, FlatList } from 'react-native';
import { Profile } from '../../components/profile';
import { ButtonAdd } from '../../components/button_add';
import { ListHeader } from '../../components/list_header';
import { CategorySelect } from '../../components/category_select';
import { Appointments, AppointmentsProps } from '../../components/appointments';
import { ListDivisor } from '../../components/list_divisor';
import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { COLLETION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/load';

export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setloading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);

    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function hendleAppointments( guildSelected: AppointmentsProps) {
        navigation.navigate('Appointments', {guildSelected});
    }

    function hendleAppointmentsCreate() {
        navigation.navigate('AppointmentsCreate');
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLETION_APPOINTMENTS);
        const storage: AppointmentsProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        }else{
            setAppointments(storage);
        }

        setloading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));
    
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={hendleAppointmentsCreate} />
            </View>
            <CategorySelect
                CategorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox={false} />

            {
                loading? <Load /> :
                <View style={styles.content}>
                    <ListHeader
                        title={'Partidas agendadas'}
                        subtitle={`Total ${appointments.length}`} />
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 70 }}
                        ItemSeparatorComponent={() => <ListDivisor />}
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointments
                                data={item}
                                onPress={() => hendleAppointments(item)}
                            />
                        )}
                    />
                </View>
            }
        </View >

    );
}