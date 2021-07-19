import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label:{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    form: {
        paddingHorizontal: 20,
        marginTop: 32
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 20,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'

    },
    image:{
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divisor: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },
    titleInput: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    limitCaracter:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.heading,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 50
    }
});