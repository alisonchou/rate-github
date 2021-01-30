import { Platform } from 'react-native';

const light = '#fff';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        appBar: '#24292e',
        light,
        inactiveTab: '#bbb',
        background: '#e1e4e8',
        fieldBorder: '#C0C0C0',
        error: '#d73a4a',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    formContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 2,
        paddingBottom: 12,
        backgroundColor: light,
    },
};

export default theme;
