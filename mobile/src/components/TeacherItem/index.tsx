import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    Alert,

} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';


export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {


    // STATES
    const [isFavorited, setIsFavorited] = useState(favorited);



    // FUNCTIONS
    function handleLinkToWhatsapp() {

        try {
            api.post('connections', {
                user_id: teacher.id,
            });
            Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
        } catch (error) {
            Alert.alert('Erro: ' + error);
        }

    }
    // favoritar e desfavoritar
    async function handleToggleFavorite() {

        try {

            const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = [];

            if (favorites) {
                favoritesArray = JSON.parse(favorites);
            }


            if (isFavorited) {
                // remover dos favoritos
                const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                    return teacherItem.id === teacher.id;
                });
                favoritesArray.splice(favoriteIndex, 1); // favoriteIndex é o indice que vai ser removido, e o 1 é que só será removido ele.
                setIsFavorited(false);
            }
            else {
                // adicionar aos favoritos
                favoritesArray.push(teacher);
                setIsFavorited(true);
            }

            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));  // JSON.stingfy porque o array deve ser convertido em texto.

        } catch (error) {
            Alert.alert('Erro: ' + error);
        }

    }



    return (
        <View style={styles.container}>

            {/** IMAGEM NOME E MATÉRIA */}
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}> {teacher.name} </Text>
                    <Text style={styles.subject}> {teacher.subject} </Text>
                </View>
            </View>

            {/** BIOGRAFIA */}
            <Text style={styles.bio}> {teacher.bio} </Text>



            {/** PREÇO E BOTÕES */}
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ {teacher.cost}
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[styles.favoriteButton,
                        isFavorited ? styles.favorited : {}]}
                    >
                        {
                            isFavorited
                                ? <Image source={unfavoriteIcon} />
                                : <Image source={heartOutlineIcon} />
                        }

                    </RectButton>

                    <RectButton
                        style={styles.contactButton}
                        onPress={handleLinkToWhatsapp}
                    >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}> Entrar em contato </Text>
                    </RectButton>
                </View>
            </View>

        </View>
    );
}

export default TeacherItem;
