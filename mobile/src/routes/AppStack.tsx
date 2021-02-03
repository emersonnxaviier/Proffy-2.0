import React from 'react';
import {
    Image, View,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword';
import Concluded from '../pages/Concluded';

import ProffImg from '../assets/images/logo.png';
import Profile from '../pages/Profile';


const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Login"

            >
                <Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name='RecoverPassword'
                    component={RecoverPassword}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name='Concluded'
                    component={Concluded}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name='Landing'
                    component={Landing}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        headerTitle: 'Meu perfil',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontSize: 14 },
                        headerTintColor: '#D4C2FF',
                        headerStyle: { backgroundColor: '#8257E5' },
                        headerRightContainerStyle: { marginRight: 30 },

                        headerRight: () => {
                            return (
                                <View>
                                    <Image source={ProffImg} />
                                </View>
                            )
                        }
                    }}
                />
                <Screen
                    name='GiveClasses'
                    component={GiveClasses}
                    options={{
                        headerTitle: 'Dar aulas',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontSize: 14 },
                        headerTintColor: '#D4C2FF',
                        headerStyle: { backgroundColor: '#8257E5' },
                        headerRightContainerStyle: { marginRight: 30 },

                        headerRight: () => {
                            return (
                                <View>
                                    <Image source={ProffImg} />
                                </View>
                            )
                        }
                    }}
                />
                <Screen
                    name='StudyTabs'
                    component={StudyTabs}
                    options={{
                        headerTitle: 'Estudar',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontSize: 14 },
                        headerTintColor: '#D4C2FF',
                        headerStyle: { backgroundColor: '#8257E5' },
                        headerRightContainerStyle: { marginRight: 30 },

                        headerRight: () => {
                            return (
                                <View>
                                    <Image source={ProffImg} />
                                </View>
                            )
                        }
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;