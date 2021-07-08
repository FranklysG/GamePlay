import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    label:{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        paddingHorizontal: 24,
        paddingVertical: 20
    },
    form: {
        paddingHorizontal: 24,
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
        paddingRight: 24,
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
    }
});