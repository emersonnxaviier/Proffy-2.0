import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    Image,
    Alert,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import logOutIcon from '../../assets/images/icons/log-out.png';

const Landing = () => {

    const navigation = useNavigation();

    const [totalConnections, setTotalConnections] = useState();

    useEffect(() => {

        try {
            api.get('connections').then(Response => {
                const { total } = Response.data;
                setTotalConnections(total);
            });

        } catch (error) {
            Alert.alert('Erro: ' + error);
        }

    }, []);

    function handleNavigationGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigationToStudyPages() {
        navigation.navigate('StudyTabs');
    }

    function handleNavigateToProfile() {
        navigation.navigate('Profile');
    }

    function handleSignOut() {
        // ENVIA O USUÁRIO PARA A ROTA SEM A OPÇÃO DE RETORNAR, SE TENTAR VOLTAR PELO BOTÃO DO DISPOSITIVO IRÁ FECHAR O APP.
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    }

    return (
        <View style={styles.container} >

            <View style={styles.topContainer}>
                <View style={styles.logoutContainer}>
                    <RectButton onPress={handleNavigateToProfile}>
                        <Text style={styles.userText}> Émerson Xavier </Text>
                    </RectButton>

                    <BorderlessButton onPress={handleSignOut}>
                        <Image source={logOutIcon} />
                    </BorderlessButton>
                </View>
                <Image source={landingImg} style={styles.banner} />
            </View>


            <View style={styles.main}>

                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>
                        O que deseja fazer ?
                </Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={handleNavigationToStudyPages}
                    >
                        <Image source={studyIcon} />
                        <Text style={styles.buttonText}> Estudar </Text>
                    </RectButton>

                    <RectButton
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={handleNavigationGiveClassesPage}
                    >
                        <Image source={giveClassesIcon} />
                        <Text style={styles.buttonText}> Dar aulas </Text>
                    </RectButton>
                </View>

                <Text style={styles.totalConnections}>
                    Total de {totalConnections} {totalConnections !== 1 ? 'conexões' : 'conexão'} {'\n'} já realizada{totalConnections !== 1 ? 's' : null} {' '}
                    <Image source={heartIcon} />
                </Text>
            </View>
        </View>
    );
}

export default Landing;