import React, { ReactNode } from 'react';
import {
    View,
    Text,
    Image,


} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';


interface PageHeaderProps {
    title: string;
    description?: string;
    headerRight?: string;
    headerFilter?: ReactNode; // ReactNode server para receber um component como propriedade.
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, headerRight, headerFilter, children }) => {  // children são os elementos colocados dentro do cabeçalho.

    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{ margin: 0 }}>
                    <Text style={title.length < 35 ? styles.titleSmall : styles.titleLarge}>{title}</Text>
                    <Text style={description ? styles.withDescription : {}}>{description}</Text>
                    {headerFilter}
                </View>
                <Text style={styles.textRight}> {headerRight} </Text>
            </View>

            {children}
        </View>
    );
}

export default PageHeader;