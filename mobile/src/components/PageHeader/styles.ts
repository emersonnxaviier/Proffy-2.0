import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5',
    },
    header: {
        flexDirection: 'row',
        //  alignItems: 'center',
        justifyContent: 'flex-start',
    },



    titleLarge: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: width * 0.65,
        marginVertical: 10,
        textAlign: 'left'
    },
    titleSmall: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: width * 0.4,
        marginVertical: 10,
        textAlign: 'left'
    },



    withDescription: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#D4C2FF',
        marginBottom: 30,
        textAlign: 'left'
    },

    textRight: {
        right: width * 0.15,
        top: 20,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 18,
        color: '#D4C2FF'
    }

});

export default styles;