import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    cotnainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 30
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontWeight: '800'
    },
    subTitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
    }
});