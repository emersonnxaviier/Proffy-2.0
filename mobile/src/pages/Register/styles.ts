import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 30
    },

    containerTitleDescription: {
        marginTop: height * 0.1,
    },

    slide: {
        flex: 1.5,
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        marginTop: height * 0.1,
    },


    /** Titulo */
    titleMain: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 32,
        lineHeight: 42
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 24,
        lineHeight: 26
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180'
    },



    // INPUTS
    iconInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputAndLabelContainer: {
        marginTop: 20,
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
        backgroundColor: '#FFF',
        width: '100%',
        height: 54,
        borderRadius: 7,
        padding: 15,

        color: '#6A6180',
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular'
    },
    inputTextArea: {
        backgroundColor: '#E6E6F0',
        width: '100%',
        borderRadius: 7,
        padding: 15,
        maxHeight: 200,
        margin: 0,

        color: '#6A6180',
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
    },


    /** ICON SEE AND HIDE PASSWORD */
    passwordIcon: {
        position: 'absolute',
        top: 15,
        right: width * 0.05
    },


    footer: {
        height: 100,
        justifyContent: 'center',
        width: '100%'
    },


    /** BUTTON */
    buttonDefault: {
        backgroundColor: '#DCDCE5',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textButtonDefault: {
        color: '#9C98A6',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26
    },

    buttonToNextField: {
        backgroundColor: '#8257E5',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    buttonSaveChanges: {
        backgroundColor: '#04d361',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textButtonSaveChanges: {
        color: '#FFF',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26
    },

});

export default styles;