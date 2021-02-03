import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({

    constainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },

    // ITENS HEADER
    line: {
        borderWidth: 0.3,
        borderColor: '#9871F5',
        width: width * 0.8,
        marginTop: 10,
        marginBottom: 20,
    },
    textFilter: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 14,
        color: '#D4C2FF'
    },
    buttonFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },




    // INPUTS FILTERS
    searchForm: {
        marginBottom: 24,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%'
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    // BUTTON
    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },


    teacherList: {
        marginTop: -40
    }

});

export default styles;