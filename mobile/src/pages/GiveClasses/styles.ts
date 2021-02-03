import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
    },

    main: {
        flex: 2,
    },
    scroll: {
        marginTop: -50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    card: {
        backgroundColor: '#FFF',
        width: width * 0.9,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    titleDataUser: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 20,
        lineHeight: 25,
        color: '#3226D4',
        marginBottom: 10,
        marginTop: 20
    },
    line: {
        borderWidth: 0.7,
        borderColor: '#E6E6F0'
    },




    // INPUTS
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
        backgroundColor: '#E6E6F0',
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




    // INPUTS DAS HORAS
    containerHours: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputHours: {
        width: width * 0.35,
        backgroundColor: '#E6E6F0',
        height: 54,
        borderRadius: 7,
        padding: 15,

        color: '#6A6180',
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular'
    },




    // ADICIONAR NOVO HORARIO
    buttonNewScheduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    newsSheduleText: {
        color: '#8257E5',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 14,
    },



    footer: {
        height: 200,
        justifyContent: 'center',
        width: '100%',
    },
    containerNotice: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 10
    },
    containerTextNotices: {
        marginLeft: 10
    },
    noticeImportantText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,
        color: '#8257E5'
    },
    noticeText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,
        color: '#A0A0B2'
    },



    /** BOTAO FINAL */
    buttonDefault: {
        backgroundColor: '#DCDCE5',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonSaveChanges: {
        backgroundColor: '#04d361',
        width: '100%',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textButtonDefault: {
        color: '#9C98A6',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26
    },
    textButtonSaveChanges: {
        color: '#FFF',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26
    }
});

export default styles;