import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { Archivo_400Regular, Archivo_600SemiBold, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'; // o useFonts importa em apenas um e em qualquer um dos dois.
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {

  /*
    const [isReady, setIsReady] = useState(false);
  
    const fetchFonts = () => {
      return Font.loadAsync({
        'Archivo_400Regular': require('./assets/fonts/Archivo-Regular.ttf'),
        'Archivo_600SemiBold': require('./assets/fonts/Archivo-SemiBold.ttf'),
        'Archivo_700Bold': require('./assets/fonts/Archivo-Bold.ttf'),
        'Poppins_400Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins_600SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      })
  
    }
  */


  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })


  // enquanto as fonts nao forem carregadas mostre o loading.
  if (!fontsLoaded) {
    return <AppLoading />
  }

  else {
    return (
      <>
        <AppStack />

        <StatusBar
          style="light"
          backgroundColor='#8257E5'
          animated
          translucent

        />
      </>
    );
  }
}


