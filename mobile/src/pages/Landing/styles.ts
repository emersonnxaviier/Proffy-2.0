import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        // padding: 40,
    },
    topContainer: {
        flex: 1,
        backgroundColor: '#8257e5',
        width: width,
    },
    logoutContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 40
    },
    userText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        lineHeight: 22,
        color: '#D4C2FF'
    },
    main: {
        padding: 40,
        flex: 1
    },
    banner: {
        width: '100%',
        resizeMode: 'contain', //serve para redmencionar a imagem proporcionalmente a largura ou a altura porem a imagem e todo conteudo dela deve estar visível. 
        marginTop: 50
    },
    title: {
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30,
        //smarginTop: height * 0,
        fontFamily: 'Poppins_400Regular'
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        lineHeight: 20,
        fontSize: 14,
        maxHeight: 140,
        marginTop: 40

    },

});


export default styles;