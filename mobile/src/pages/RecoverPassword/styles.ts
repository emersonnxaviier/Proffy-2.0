import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        marginTop: 29
    },
    imgProffContainer: {
        flex: 1,
        backgroundColor: '#8257E5',
        width: width,
        alignItems: 'center',
        justifyContent: 'center',

    },
    imgProff: {
        width: 170,
        height: 60
    },
    imgProffText: {
        textAlign: 'left',
        height: height * 0.05,
        color: '#D4c2FF'
    },
    main: {
        flex: 1.7,
        width: width * 0.85,
    },

    backIconContainer: {
        marginTop: 30,
        height: 20,
        width: width * 0.1,
        justifyContent: 'center'
    },

    /** TITLE */

    titleContainer: {
        width: '100%',
        marginTop: 40,
        marginBottom: 20
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        lineHeight: 34,
        color: '#32264D',
        marginBottom: 10
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180',
        marginLeft: 5,
        textAlign: 'left'
    },


    /** INPUT */

    inputAndLabelContainer: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 22,
        color: '#9C98A6',
    },
    errorText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 22,
        color: "#ff6961",
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 54,
        borderRadius: 7,
        padding: 15,

        color: '#6A6180',
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular'
    },

    /** BUTTON */

    signInButton: {
        backgroundColor: '#DCDCE5',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    signInButtonText: {
        color: '#9C98A6',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26
    },

    signInButtonOk: {
        backgroundColor: '#04d361',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    signInButtonTextOk: {
        color: '#FFF',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26
    },

});

export default styles;