import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: { 
        width: 110,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.secondary40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    },
    check: {
        width: 10,
        height: 10,
        marginTop: -5,
        marginBottom: 20,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 8,
        borderRadius: 50
    },
    checked: {
        width: 10,
        height: 10,
        marginTop: -5,
        marginBottom: 20,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7
    }
    
});