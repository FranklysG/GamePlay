import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: { 
        width: 110,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderRadius: 8
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15
    },
    check: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 8,
        borderRadius: 50,

    },
    checked: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.secondary50,
        borderRadius: 50
    }
    
});