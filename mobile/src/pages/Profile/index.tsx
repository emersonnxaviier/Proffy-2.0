import React, { useState } from 'react';
import {
    Alert,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    View,


} from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { ArrayDays } from '../../utils/index';


import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import BackgroundImg from '../../assets/images/give-classes-background.png';
import CameraProfileIcon from '../../assets/images/icons/camera-profile.png';

import styles from './styles';
import { Picker } from '@react-native-picker/picker';



const Profile = () => {


    // VARIAVEIS
    const navigation = useNavigation();

    const schema = Yup.object().shape({
        name: Yup.string().required("Insira seu nome").min(3, 'Nome muito curto'),
        surname: Yup.string().required("Insira seu sobrenome").min(2, 'Sobrenome muito curto'),
        email: Yup.string().required("Insira seu email").email("Insira um email válido"),
        whatsapp: Yup.string().required("Insira seu número de telefone").min(14, "Número de telefone inválido").max(15, "Número de telefone inválido"),
        biography: Yup.string().required("Insira uma biografia").min(20, "Biografia muito curta").max(300, "Máximo de caracteres"),
        subject: Yup.string().required('Insira o nome da materia').min(6, 'Nome de materia muito curto'),
        cost: Yup.string().required('Insira o valor da aula'),
    });




    // STATES
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [biography, setBiography] = useState('');
    const [subject, setSubjesct] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

    const [photoProfile, setPhotoProfile] = useState('');
    const [numberOfCharactersBiography, setNumberOfCharactersBiography] = useState(0);




    // FUNCTIONS
    async function handleAddPhotoToProfile() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediadays: ImagePicker.MediaTypeOptions.Images,
                aspect: [1, 1],
                quality: 0.9,
            });

            console.log(result);

            if (!result.cancelled) {
                await setPhotoProfile(result.uri)

            }


        } catch (error) {
            console.warn('Erro: ' + error);
        }
    }

    function handleAddNewSchedule() {
        try {
            setScheduleItems([
                ...scheduleItems,
                { week_day: -1, from: '', to: '' }
            ])

        } catch (error) {
            console.error('Erro: ' + error);
        }
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value } // o [] por volta do fild é para que o nome da constante não seja field, dessa forma vai sobrescrever o valor que ja existia no array e assim alterando seu valor.
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);
    }

    function handleDeleteSchedule(key: Number) {
        try {
            Alert.alert('Excluir horário', 'Deseja excluir esse horário?', [
                {
                    text: 'Sim',
                    onPress() {

                        const updateScheduleItems: any = [];
                        scheduleItems.map((scheduleItem, index) => {
                            if (index !== key) {
                                updateScheduleItems.push(scheduleItem);
                            }
                            return scheduleItem;
                        });
                        setScheduleItems(updateScheduleItems);

                        Alert.alert('Horário ' + key + ' apagado com sucesso!')
                    }
                },
                {
                    text: 'Não'
                }

            ]);


        } catch (error) {
            console.error('ERRO ' + error);
        }
    }

    function handleSaveToChanges() {
        try {
            console.log(
                name,
                surname,
                email,
                whatsapp,
                whatsapp.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, ''),
                biography,
                subject,
                cost,
                parseInt(cost.replace(/[^\d]+/g, '')),
                scheduleItems,
                photoProfile
            );
            navigation.goBack();

        } catch (error) {
            console.warn('Erro: ' + error);
        }
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imgProffContainer}
                source={BackgroundImg}
                resizeMode='repeat'
            >


                <View style={styles.dataUserContainer}>

                    <View style={styles.imageAndIconContainer}>
                        <View style={styles.imgUserContainer}>
                            {photoProfile != '' && <Image source={{ uri: photoProfile }} style={styles.imgProfile} />}
                        </View>

                        <TouchableOpacity onPress={handleAddPhotoToProfile} style={styles.iconCameraProfile} >
                            <Image source={CameraProfileIcon} />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.nameUserText}> Émerson Xavier </Text>
                    <Text style={styles.subjectUserText}>Estrutura</Text>
                </View>
            </ImageBackground>


            <View style={styles.main}>
                <ScrollView
                    style={styles.scroll}
                    showsVerticalScrollIndicator={false}
                >

                    {/** FORMULARIO */}

                    <Formik
                        initialValues={{
                            name,
                            surname,
                            email,
                            whatsapp,
                            biography,

                            subject,
                            cost,
                        }}
                        validationSchema={schema}
                        onSubmit={handleSaveToChanges}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                            <>



                                <View style={styles.card}>
                                    <Text style={styles.titleDataUser}> Seus dados</Text>
                                    <View style={styles.line} />


                                    <View style={styles.inputAndLabelContainer}>
                                        <Text style={styles.label}>Nome</Text>
                                        {errors.name && touched.name && <Text style={styles.errorText}>{errors.name}</Text>}
                                        <View>
                                            <TextInput style={styles.input}
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
                                        <Text style={styles.label}>Sobrenome</Text>
                                        {errors.surname && touched.surname && <Text style={styles.errorText}>{errors.surname}</Text>}
                                        <View>
                                            <TextInput style={styles.input}
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


                                    <View style={styles.inputAndLabelContainer}>
                                        <Text style={styles.label}>Email</Text>
                                        {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
                                        <View>
                                            <TextInput style={styles.input}
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
                                        <Text style={styles.label}>Whatsapp</Text>
                                        {errors.whatsapp && touched.whatsapp && <Text style={styles.errorText}>{errors.whatsapp}</Text>}
                                        <View>
                                            <TextInputMask
                                                type={'cel-phone'}
                                                options={{
                                                    maskType: 'BRL',
                                                    withDDD: true,
                                                    dddMask: '(99) '
                                                }}
                                                style={styles.input}
                                                onChangeText={(text) => {
                                                    values.whatsapp = text;
                                                    setWhatsapp(text);
                                                }}
                                                onBlur={handleBlur('whatsapp')}
                                                value={values.whatsapp || whatsapp}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.inputAndLabelContainer}>
                                        <Text style={styles.label}>Biografia</Text>
                                        {errors.biography && touched.biography && <Text style={styles.errorText}>{errors.biography}</Text>}
                                        <View>
                                            <TextInput
                                                style={styles.inputTextArea}
                                                onChangeText={(text) => {
                                                    values.biography = text;
                                                    setNumberOfCharactersBiography(values.biography.length);
                                                    setBiography(text);
                                                }}
                                                onBlur={handleBlur('biography')}
                                                value={values.biography || biography}
                                                autoCapitalize="sentences"
                                                maxLength={300}
                                                multiline
                                            />
                                            <Text style={{ alignSelf: "flex-end", color: "#939393" }}>{numberOfCharactersBiography} / 300</Text>
                                        </View>
                                    </View>


                                    <Text style={styles.titleDataUser}> Sobre a aula</Text>
                                    <View style={styles.line} />

                                    <View style={styles.inputAndLabelContainer}>
                                        <Text style={styles.label}>Matéria</Text>
                                        {errors.subject && touched.subject && <Text style={styles.errorText}>{errors.subject}</Text>}
                                        <View>
                                            <TextInput style={styles.input}
                                                onChangeText={(text) => {
                                                    values.subject = text;
                                                    setSubjesct(text);
                                                }}
                                                onBlur={handleBlur('subject')}
                                                value={values.subject || subject}
                                                autoCapitalize="sentences"
                                            />
                                        </View>
                                    </View>


                                    <View style={styles.inputAndLabelContainer}>
                                        <Text style={styles.label}>Custo da sua hora por aula</Text>
                                        {errors.cost && touched.cost && <Text style={styles.errorText}>{errors.cost}</Text>}
                                        <View>
                                            <TextInputMask
                                                type={'money'}
                                                options={{
                                                    precision: 2,
                                                    separator: ',',
                                                    delimiter: '.',
                                                    unit: 'R$',
                                                    suffixUnit: ''
                                                }}
                                                style={styles.input}
                                                onChangeText={(text) => {
                                                    values.cost = text;
                                                    setCost(text);
                                                }}
                                                onBlur={handleBlur('cost')}
                                                value={values.cost || cost}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.buttonNewScheduleContainer}>
                                        <Text style={styles.titleDataUser}> Horários disponíveis</Text>
                                        <TouchableOpacity onPress={handleAddNewSchedule}>
                                            <Text style={styles.newsSheduleText}> + Novo</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.line} />


                                    {/** ADICIONAR NOVOS HORÁRIOS */}
                                    {
                                        scheduleItems.map((scheduleItem, index) => {
                                            return (

                                                <View key={scheduleItem.week_day}>

                                                    <View style={styles.inputAndLabelContainer}>
                                                        <Text style={styles.label}> Dia da semana </Text>

                                                        <View style={styles.input}>
                                                            <Picker
                                                                selectedValue={scheduleItem.week_day}
                                                                style={{ flex: 1 }}
                                                                onValueChange={(itemValue: any, itemIndex: any) => {
                                                                    setScheduleItemValue(index, 'week_day', itemValue);
                                                                }}
                                                            >
                                                                <Picker.Item color="" label=" " value="" />
                                                                {
                                                                    ArrayDays.map(
                                                                        (day) => <Picker.Item key={day.dia} color="#3226D4" label={day.dia} value={day.indice} />
                                                                    )
                                                                }
                                                            </Picker>
                                                        </View>
                                                    </View>


                                                    <View style={styles.containerHours}>

                                                        <View style={styles.inputAndLabelContainer}>
                                                            <Text style={styles.label}>Das</Text>
                                                            <View>
                                                                <TextInputMask
                                                                    type={'datetime'}
                                                                    options={{
                                                                        format: 'HH:mm'
                                                                    }}
                                                                    style={styles.inputHours}
                                                                    onChangeText={(text) => {
                                                                        setScheduleItemValue(index, 'from', text);
                                                                    }}
                                                                    onBlur={handleBlur('scheduleItems')}
                                                                    value={scheduleItem.from}
                                                                />
                                                            </View>
                                                        </View>


                                                        <View style={styles.inputAndLabelContainer}>
                                                            <Text style={styles.label}>Até</Text>
                                                            <View>
                                                                <TextInputMask
                                                                    type={'datetime'}
                                                                    options={{
                                                                        format: 'HH:mm'
                                                                    }}
                                                                    style={styles.inputHours}
                                                                    onChangeText={(text) => {
                                                                        setScheduleItemValue(index, 'to', text);
                                                                    }}
                                                                    onBlur={handleBlur('scheduleItems')}
                                                                    value={scheduleItem.to}
                                                                />
                                                            </View>
                                                        </View>

                                                    </View>

                                                    <View style={styles.containerDeleteSchedule}>
                                                        <View style={styles.line} />

                                                        <TouchableOpacity onPress={() => handleDeleteSchedule(scheduleItem.week_day)}>
                                                            <Text style={styles.TextButtonDeleteSchedule}> Excluir horário </Text>
                                                        </TouchableOpacity>

                                                        <View style={styles.line} />

                                                    </View>

                                                </View>
                                            );
                                        })
                                    }








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
                                                Salvar alterações
                                        </Text>
                                        </RectButton>
                                    </View>
                                </View>

                            </>
                        )}
                    </Formik>


                </ScrollView>
            </View>
        </View >
    );
}

export default Profile;