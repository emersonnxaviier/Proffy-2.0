import React from 'react';
import {
    Image,
    ImageBackground,
    Text,
    View,


} from 'react-native';

import BackgroundImg from '../../assets/images/give-classes-background.png';
import DoneImg from '../../assets/images/done.png';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';



interface Params {
    title: string;
    description: string;
    textButton: string;
}


const Concluded = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const itemParams = route.params as Params;


    function handleToGoBackLogin() {
        // ENVIA O USUÁRIO PARA A ROTA SEM A OPÇÃO DE RETORNAR, SE TENTAR VOLTAR PELO BOTÃO DO DISPOSITIVO IRÁ FECHAR O APP.
        navigation.reset({
            routes: [{ name: 'Login' }]
        });

    }



    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImg}
                source={BackgroundImg}
                resizeMode='contain'
            >
                <View style={styles.main}>

                    <Image source={DoneImg} style={styles.doneImg} />

                    <Text style={styles.title}> {itemParams.title} </Text>

                    <Text style={styles.description}>
                        {itemParams.description}
                    </Text>
                </View>

                <RectButton style={styles.okButton} onPress={handleToGoBackLogin}>
                    <Text style={styles.okButtonText}>{itemParams.textButton}</Text>
                </RectButton>


            </ImageBackground>
        </View>
    );
}

export default Concluded;
