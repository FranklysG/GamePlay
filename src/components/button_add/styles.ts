import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: { 
        width: 56,
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: theme.fonts.title700
    },
    
});