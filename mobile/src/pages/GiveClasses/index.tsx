import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Picker,
    Image,

} from 'react-native';
import styles from './styles';

import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { Formik } from 'formik';
import * as Yup from 'yup';

import PageHeader from '../../components/PageHeader';

import alertIcon from '../../assets/images/icons/alert.png';
import { ArrayDays } from '../../utils';

const GiveClasses = () => {

    // VARIAVEIS

    // parametros da tela de Concluido.
    const title = 'Cadastro salvo!';
    const description = 'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp';
    const textButton = 'Fazer login';

    const navigation = useNavigation();

    const schema = Yup.object().shape({
        whatsapp: Yup.string().required("Insira seu número de telefone").min(14, "Número de telefone inválido").max(15, "Número de telefone inválido"),
        biography: Yup.string().required("Insira uma biografia").min(20, "Biografia muito curta").max(300, "Máximo de caracteres"),
        subject: Yup.string().required('Insira o nome da materia').min(6, 'Nome de materia muito curto'),
        cost: Yup.string().required('Insira o valor da aula'),
    });



    // STATES
    const [whatsapp, setWhatsapp] = useState('');
    const [biography, setBiography] = useState('');
    const [subject, setSubjesct] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

    const [numberOfCharactersBiography, setNumberOfCharactersBiography] = useState(0);



    // FUNCTIONS
    function handleSavedRegister(title: string, description: string, textButton: string) {
        // ENVIA O USUÁRIO PARA A ROTA SEM A OPÇÃO DE RETORNAR, SE TENTAR VOLTAR PELO BOTÃO DO DISPOSITIVO IRÁ FECHAR O APP.
        navigation.reset({
            routes: [{ name: 'Concluded', params: { title, description, textButton } }]
        });
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

    function handleSaveToChanges() {
        try {
            console.log(
                whatsapp,
                whatsapp.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, ''),
                biography,
                subject,
                cost,
                parseInt(cost.replace(/[^\d]+/g, '')),
                scheduleItems,
            );

        } catch (error) {
            console.warn('Erro: ' + error);
        }
    }





    return (
        <View style={styles.container}>

            <PageHeader
                title='Que incrivel que você quer dar aulas.'
                description='O primeiro passo, é preencher esse formulário de inscrição.'
            />

            <View style={styles.main}>
                <ScrollView
                    style={styles.scroll}
                    showsVerticalScrollIndicator={false}
                >

                    {/** FORMULARIO */}

                    <Formik
                        initialValues={{
                            whatsapp,
                            biography,

                            subject,
                            cost,
                        }}
                        validationSchema={schema}
                        onSubmit={() => handleSavedRegister(title, description, textButton)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                            <>



                                <View style={styles.card}>
                                    <Text style={styles.titleDataUser}> Seus dados</Text>
                                    <View style={styles.line} />

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
                                                                onValueChange={(itemValue: string) => {
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

                                                </View>
                                            );
                                        })
                                    }


                                    <View style={[styles.line, { marginTop: 30 }]} />

                                    <View style={styles.footer}>
                                        <RectButton
                                            enabled={isValid}
                                            style={!isValid ? styles.buttonDefault : styles.buttonSaveChanges}
                                            onPress={(e: any) => {
                                                console.log(values);
                                                handleSubmit(e);
                                                handleSaveToChanges()
                                            }}
                                        >
                                            <Text style={!isValid ? styles.textButtonDefault : styles.textButtonSaveChanges}>
                                                Salvar cadastro
                                            </Text>
                                        </RectButton>

                                        <View style={styles.containerNotice}>
                                            <View>
                                                <Image source={alertIcon} />
                                            </View>

                                            <View style={styles.containerTextNotices}>
                                                <Text style={styles.noticeImportantText}> Importante!</Text>
                                                <Text style={styles.noticeText}> Preencha todos os dados</Text>
                                            </View>
                                        </View>
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

export default GiveClasses;