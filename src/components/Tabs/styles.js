import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        height: metrics.tabBarHeight,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: colors.lighter,
        backgroundColor: colors.white,
        justifyContent: 'space-around',
        alignItems: 'center',
        //paddingHorizontal: metrics.padding,
    },
    icon: {
        color: colors.light,
    },
    active: {
        color: colors.primary,
    },
    main: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor:colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainIcon: {
        color: colors.white,
    },
});

export default styles;