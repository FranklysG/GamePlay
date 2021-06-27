import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import {Category} from '../category';
import {categories} from '../../utils/categories';

type Props = {
    CategorySelected: string,
    setCategory: (CategoryId: string) => void
}

export function CategorySelect({CategorySelected, setCategory} : Props){
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            style={styles.container}
        >
            {
                categories.map( category => (
                    <Category
                        key={category.id} 
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === CategorySelected}
                        onPress={() => setCategory(category.id)} />
                ))
            }
        </ScrollView>
    );
}