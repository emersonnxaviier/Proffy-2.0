import React, { useState } from 'react'
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View

} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import seePasswordIcon from '../../assets/images/icons/see-password.png';
import hidePasswordIcon from '../../assets/images/icons/hide-password.png';
import backIcon from '../../assets/images/icons/back-dark.png';


import styles from './styles';


const Register = () => {

    //VARIAVEIS
    const navigation = useNavigation();

    // parametros da tela de Concluido.
    const title = 'Cadastro concluído!';
    const description = 'Agora você faz parte da plataforma da Proffy';
    const textButton = 'Fazer login';


    const schema = Yup.object().shape({
        name: Yup.string().required("Insira seu nome").min(3, 'Nome muito curto'),
        surname: Yup.string().required("Insira seu sobrenome").min(2, 'Sobrenome muito curto'),
        email: Yup.string().required("Insira seu email").email("Insira um email válido"),
        password: Yup.string().required("Insira sua senha").min(8, 'senha muito curta'),
    });


    //STATES
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [canSeeAndHidePassword, setCanSeeAndHidePassword] = useState(true);

    const [formPartOneOrTwo, setFormPartOneOrTwo] = useState(true);



    // FUNCTIONS
    function handleToGoBack() {
        navigation.goBack();
    }

    function changeIconPassword() {
        try {
            setCanSeeAndHidePassword(!canSeeAndHidePassword);
        } catch (error) {
            console.warn('Erro: ' + error);
        }
    }

    function handleToSaveRegister(title: string, description: string, textButton: string) {

        try {

            // codigo de banco de dados...

            navigation.reset({
                routes: [{ name: 'Concluded', params: { title, description, textButton } }]
            });

        } catch (error) {
            console.log('Erro: ' + error);
            Alert.alert('Erro: ' + error);
        }


    }

    function handleToNextFields() {
        if (name !== '' && surname !== '') {
            setFormPartOneOrTwo(false);
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container}>

            <TouchableOpacity style={{ marginTop: 60 }} onPress={handleToGoBack}>
                <Image source={backIcon} />
            </TouchableOpacity>

            <View style={styles.containerTitleDescription}>
                <Text style={styles.titleMain}>Crie sua {'\n'}
                    <Text>conta gratuíta</Text>
                </Text>

                <Text style={styles.description}>Basta preencher esses dados {'\n'}
                    <Text>e você estará conosco.</Text>
                </Text>
            </View>





            <View style={styles.slide}>

                <Formik
                    initialValues={{
                        name,
                        surname,
                        email,
                        password,
                    }}
                    validationSchema={schema}
                    onSubmit={() => handleToSaveRegister(title, description, textButton)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                        <>

                            {formPartOneOrTwo == true ?

                                <View>

                                    <Text style={styles.title}>01. Quem é você?</Text>

                                    <View style={styles.inputAndLabelContainer}>
                                        {errors.name && touched.name && <Text style={styles.errorText}>{errors.name}</Text>}
                                        <View>
                                            <TextInput style={styles.input}
                                                placeholder='Nome'
                                                onChangeText={(text) => {
                                                    values.name = text;
                                                    setName(text);
                                                }}
                                                onBlur={handleBlur('name')}
                                                value={values.name || name}
                                                autoCapitalize="words"
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.inputAndLabelContainer}>
                                        {errors.surname && touched.surname && <Text style={styles.errorText}>{errors.surname}</Text>}
                                        <View>
                                            <TextInput style={styles.input}
                                                placeholder='Sobrenome'
                                                onChangeText={(text) => {
                                                    values.surname = text;
                                                    setSurname(text);
                                                }}
                                                onBlur={handleBlur('surname')}
                                                value={values.surname || surname}
                                                autoCapitalize="words"
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.footer}>
                                        <RectButton
                                            // enabled={isValid}
                                            style={styles.buttonToNextField} // !isValid ? styles.buttonDefault :
                                            onPress={(e: any) => {
                                                console.log(values);
                                                handleSubmit(e);
                                                handleToNextFields();
                                            }}
                                        >
                                            <Text
                                                style={styles.textButtonSaveChanges} // !isValid ? styles.textButtonDefault :
                                            >
                                                Próximo
                                        </Text>
                                        </RectButton>
                                    </View>
                                </View>
                                :
                                <View>
                                    {/* PARTE DOIS DO FORMULARIO */}

                                    < Text style={styles.title}>02. Email e Senha</Text>

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
                                                secureTextEntry={canSeeAndHidePassword} // mostar/esconder  senha
                                            />

                                            <BorderlessButton style={styles.passwordIcon} onPress={changeIconPassword}>
                                                <Image source={canSeeAndHidePassword ? seePasswordIcon : hidePasswordIcon} />
                                            </BorderlessButton>
                                        </View>
                                    </View>


                                    <View style={styles.footer}>
                                        <RectButton
                                            enabled={isValid}
                                            style={!isValid ? styles.buttonDefault : styles.buttonSaveChanges}
                                            onPress={(e: any) => {
                                                console.log(values);
                                                handleSubmit(e);
                                            }}
                                        >
                                            <Text style={!isValid ? styles.textButtonDefault : styles.textButtonSaveChanges}>
                                                Concluir cadastro
                                    </Text>
                                        </RectButton>
                                    </View>
                                </View>

                            }


                        </>
                    )}
                </Formik>
            </View>

        </KeyboardAvoidingView >


    )
}


export default Register;