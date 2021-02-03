import React from 'react';
import {
    StyleSheet,
    Dimensions,

} from 'react-native';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
    },
    backgroundImg: {
        flex: 1,
        width: width * 0.9,
        marginLeft: 20
    },
    main: {
        marginTop: height * 0.25,
        alignItems: 'center',
    },
    doneImg: {
        width: 100,
        height: 100
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 36,
        lineHeight: 45,
        textAlign: 'center'
    },
    description: {
        color: '#d4c3ff',
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        marginBottom: height * 0.15
    },

    okButton: {
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
});

export default styles;