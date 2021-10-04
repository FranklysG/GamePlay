import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: theme.colors.discord,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image:{
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 20
    },
    
});