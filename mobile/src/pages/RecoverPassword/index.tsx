import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Image,
    ImageBackground,
    Text,
    Alert,
    TextInput,


} from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import ProffImg from '../../assets/images/logo.png';
import BackgroundImg from '../../assets/images/give-classes-background.png';
import BackIcon from '../../assets/images/icons/back-dark.png';

import styles from './styles';


const RecoverPassword = () => {

    // VARIAVEIS

    // parametros da tela de Concluido.
    const title = 'Redefinição enviada!';
    const description = 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.';
    const textButton = 'Voltar ao login';

    const navigation = useNavigation();
    const schema = Yup.object().shape({
        email: Yup.string().required("Insira seu email").email("Insira um email válido"),
    });



    // STATES
    const [email, setEmail] = useState('');


    //FUNCTIONS
    function handleToGoBack() {
        navigation.goBack();
    }

    function handleClickButtonSaveChanges() {

        try {

        } catch (error) {
            console.warn('Erro: ' + error);
        }

    }

    function handleRecoverPassword(title: string, description: string, textButton: string) {

        console.log('Email: ' + email);

        navigation.reset({
            routes: [{ name: 'Concluded', params: { title, description, textButton } }]
        });

        setEmail('');

    }




    return (

        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                style={styles.imgProffContainer}
                source={BackgroundImg}
                resizeMode='repeat'
            >
                <View>
                    <Image source={ProffImg} style={styles.imgProff} />
                    <Text style={styles.imgProffText}>Sua plataforma de{'\n'}
                        <Text>estudos online</Text>
                    </Text>
                </View>
            </ImageBackground>



            <View style={styles.main}>


                <TouchableOpacity
                    style={styles.backIconContainer}
                    onPress={handleToGoBack}
                >
                    <Image source={BackIcon} />
                </TouchableOpacity>


                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Esqueceu sua senha? </Text>

                    <Text style={styles.description}>
                        Não esquenta,{'\n'}
                        <Text>vamos dar um jeito nisso.</Text>
                    </Text>
                </View>


                {/** FORMULARIO */}

                <Formik
                    initialValues={{
                        email,
                    }}
                    validationSchema={schema}
                    onSubmit={() => handleRecoverPassword(title, description, textButton)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                        <>


                            <View style={styles.inputAndLabelContainer}>
                                {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
                                <View>
                                    <TextInput style={styles.input}
                                        placeholder='E-mail'
                                        placeholderTextColor='#9c98A6'
                                        onChangeText={(text) => {
                                            values.email = text;
                                            setEmail(text);
                                        }}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        autoCapitalize="none"
                                    />
                                </View>
                            </View>


                            <RectButton
                                enabled={isValid}
                                style={!isValid ? styles.signInButton : styles.signInButtonOk}
                                onPress={(e: any) => {
                                    console.log(values);
                                    handleSubmit(e);
                                }}
                            >
                                <Text style={!isValid ? styles.signInButtonText : styles.signInButtonTextOk}>
                                    Enviar
                                </Text>
                            </RectButton>
                        </>
                    )}
                </Formik>


            </View>
        </KeyboardAvoidingView >
    );
}

export default RecoverPassword;