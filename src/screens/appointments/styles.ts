import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 234,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        paddingHorizontal: 24,
        paddingVertical: 0
    },
    subtitle: {
        fontSize: 20,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        paddingHorizontal: 24,
        paddingVertical: 10
    },
    members: {
        paddingVertical: 10,
        paddingHorizontal: 24
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
   
});