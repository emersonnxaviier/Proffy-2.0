import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    CheckBox,
    View,
    Image,
    ImageBackground,
    Text,
    Alert,
    TextInput,


} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import ProffImg from '../../assets/images/logo.png';
import BackgroundImg from '../../assets/images/give-classes-background.png';
import seePasswordIcon from '../../assets/images/icons/see-password.png';
import hidePasswordIcon from '../../assets/images/icons/hide-password.png';


import styles from './styles';

const Login = () => {

    // VARIAVEIS
    const navigation = useNavigation();
    const schema = Yup.object().shape({
        email: Yup.string().required("Insira seu email").email("Insira um email válido"),
        password: Yup.string().required("Insira sua senha").min(8, 'senha muito curta'),
    });



    // STATES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSelected, setIsSelection] = useState(false);
    const [isSeeAndHidePassword, setIsSeeAndHidePassword] = useState(true);



    //FUNCTIONS
    function handleToRegisterNewCount() {
        setEmail('');
        setPassword('');
        navigation.navigate('Register');
    }

    function handleToRecoverPassword() {
        setEmail('');
        setPassword('');
        navigation.navigate('RecoverPassword');
    }

    function changeIconPassword() {
        try {
            setIsSeeAndHidePassword(!isSeeAndHidePassword);
        } catch (error) {
            console.warn('Erro: ' + error);
        }
    }

    function handleClickButtonSaveChanges() {

        try {

        } catch (error) {
            console.warn('Erro: ' + error);
        }

    }

    function signIn() {
        try {
            console.log(
                ' Email: ' + email,
                ' Senha: ' + password,
            );

            // ENVIA O USUÁRIO PARA A ROTA SEM A OPÇÃO DE RETORNAR, SE TENTAR VOLTAR PELO BOTÃO DO DISPOSITIVO IRÁ FECHAR O APP.
            navigation.reset({
                routes: [{ name: 'Landing' }]
            });


        } catch (error) {
            console.warn('Erro: ' + error);
        }
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
                    <Text style={styles.imgProffText}> Sua plataforma de{'\n'}
                        <Text> estudos online</Text>
                    </Text>
                </View>
            </ImageBackground>



            <View style={styles.main}>

                <View style={styles.registerContainer}>
                    <Text style={styles.loginText}> Fazer Login </Text>
                    <Text
                        style={styles.registerText}
                        onPress={handleToRegisterNewCount}
                    >
                        Criar uma conta
                    </Text>
                </View>



                {/** FORMULARIO */}

                <Formik
                    initialValues={{
                        email,
                        password,

                    }}
                    validationSchema={schema}
                    onSubmit={signIn}
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
                                        value={values.email || email}
                                        autoCapitalize="none"
                                    />
                                </View>
                            </View>


                            <View style={styles.inputAndLabelContainer}>
                                {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
                                <View style={styles.iconInputContainer}>
                                    <TextInput style={styles.input}
                                        placeholder='Senha'
                                        placeholderTextColor='#9c98A6'
                                        onChangeText={(text) => {
                                            values.password = text;
                                            setPassword(text);
                                        }}
                                        onBlur={handleBlur('password')}
                                        value={values.password || password}
                                        autoCapitalize="none"
                                        secureTextEntry={isSeeAndHidePassword} // mostar/esconder  senha
                                    />

                                    <BorderlessButton style={styles.passwordIcon} onPress={changeIconPassword}>
                                        <Image source={isSeeAndHidePassword ? seePasswordIcon : hidePasswordIcon} />
                                    </BorderlessButton>
                                </View>
                            </View>


                            <View style={styles.rememberContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setIsSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.rememberText}> Lembrar-me </Text>
                                </View>
                                <Text style={styles.rememberText} onPress={handleToRecoverPassword}> Esqueci minha senha</Text>
                            </View>




                            <RectButton
                                enabled={isValid}
                                style={!isValid ? styles.signInButton : styles.signInButtonOk}
                                onPress={(e: any) => {
                                    console.log(values);
                                    handleSubmit(e);
                                }}
                            >
                                <Text style={!isValid ? styles.signInButtonText : styles.signInButtonTextOk}>Entrar</Text>
                            </RectButton>

                        </>
                    )}
                </Formik>

            </View>
        </KeyboardAvoidingView >
    );
}

export default Login;