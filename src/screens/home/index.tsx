import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/profile';
import { ButtonAdd } from '../../components/button_add';
import { CategorySelect } from '../../components/category_select';
import { styles } from './styles';
export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View >
                <CategorySelect />
            </View>
        </View>
    );
}