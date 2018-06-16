import {Platform} from 'react-native';

export default {
    ...Platform.select({
        ios: { headerHeight: 64, headerPadding: 20, padding: 15 },
        android: { headerHeight: 44, headerPadding: 0, padding: 15 } 
    }),
    tabBarHeight: 50,
};