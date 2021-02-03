import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Alert,

} from 'react-native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler'; //BorderlessButton é um botao que não é retangular, e que não possui fundo.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';
import { Feather, Entypo } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { arraySubjects, ArrayDays, arrayHours } from '../../utils/index';

import styles from './styles';
import api from '../../services/api';

const TeacherList = () => {


    // VARIAVEIS



    // STATES
    const [isFiltersVisible, setIsFiltersViseble] = useState(false);

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');



    // vai executar toda vez em que a tela entrar em foco(ser exibida).
    useFocusEffect(() => {
        loadFavorites();
    })


    // FUNCTIONS
    function loadFavorites() {
        try {
            AsyncStorage.getItem('favorites').then(response => {
                if (response) {
                    const favoritedTeachers = JSON.parse(response);
                    const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                        return teacher.id;
                    })
                    setFavorites(favoritedTeachersIds);
                }
            });
        } catch (error) {
            Alert.alert('Erro: ' + error);
        }
    }

    // função para mostrar e esconder os filtros.
    function handleToggleFiltersVisible() {
        setIsFiltersViseble(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {

        try {

            //   console.warn(subject + '  ' + week_day + '  ' + time)

            loadFavorites();

            const response = await api.get('classes', {
                params: {
                    subject,
                    week_day,
                    time,
                }
            });

            setIsFiltersViseble(false);
            setTeachers(response.data);

        } catch (error) {
            Alert.alert('Erro: ' + error);
        }

    }


    return (
        <View style={styles.constainer} >

            <PageHeader
                title='Proffs Disponíveis'
                headerRight='0 proffs'
                headerFilter={(
                    <TouchableOpacity onPress={handleToggleFiltersVisible}>
                        <View style={styles.buttonFilter}>

                            <Feather name='filter' size={20} color='#04D361' />

                            <Text style={styles.textFilter}>
                                Filtrar por dia, hora e matéria
                            </Text>

                            <Entypo name="chevron-small-down" size={24} color='#D4C2FF' />
                        </View>

                        <View style={styles.line} />
                    </TouchableOpacity>
                )}

            >

                {isFiltersVisible && (

                    <View style={styles.searchForm}>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.label}> Matéria </Text>

                            <View style={styles.input}>
                                <Picker
                                    selectedValue={subject}
                                    style={{ flex: 1 }}
                                    onValueChange={(itemValue: any, itemIndex: any) => {
                                        setSubject(itemValue);
                                    }}
                                >
                                    <Picker.Item color="" label=" " value="" />
                                    {
                                        arraySubjects.map(
                                            (subject) => <Picker.Item key={subject.value} color="#3226D4" label={subject.value} value={subject.value} />
                                        )
                                    }
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.inputGroup}>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}> Dia da semana </Text>
                                <View style={styles.input}>
                                    <Picker
                                        selectedValue={week_day}
                                        style={{ flex: 1 }}
                                        onValueChange={(itemValue: any, itemIndex: any) => {
                                            setWeekDay(itemValue);
                                        }}
                                    >
                                        <Picker.Item color="" label=" " value="" />
                                        {
                                            ArrayDays.map(
                                                (days) => <Picker.Item key={days.dia} color="#3226D4" label={days.dia} value={days.indice} />
                                            )
                                        }
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <View style={styles.input}>
                                    <Picker
                                        selectedValue={time}
                                        style={{ flex: 1 }}
                                        onValueChange={(itemValue: any, itemIndex: any) => {
                                            setTime(itemValue);
                                        }}
                                    >
                                        <Picker.Item color="" label=" " value="" />
                                        {
                                            arrayHours.map(
                                                (hour) => <Picker.Item key={hour.value} color="#3226D4" label={hour.value} value={hour.value} />
                                            )
                                        }
                                    </Picker>
                                </View>
                            </View>

                        </View>

                        <RectButton
                            style={styles.submitButton}
                            onPress={handleFiltersSubmit}
                        >
                            <Text style={styles.submitButtonText}> Filtrar </Text>
                        </RectButton>

                    </View>
                )}

            </PageHeader>


            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    );
                })}


            </ScrollView>

        </View>
    );
}

export default TeacherList;
