import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        paddingHorizontal: metrics.padding,
        borderBottomWidth: 1,
        borderColor: colors.lighter,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        color: colors.primary,
    },
    title: {
        fontSize: fonts.big,
        color: colors.dark,
    },
});

export default styles;