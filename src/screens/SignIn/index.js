import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import refactorColors from '../../../src/utils/refactorColors';

import Charizard from '../../../assets/images/charizard.png';
import Background from '../../../assets/images/background.png';

export default function SignIn({ navigation }) {
  let [fontsLoaded] = useFonts({
    'Pokemon-Hollow': require('../../../assets/fonts/Pokemon-Hollow.ttf'),
    'Pokemon-Solid': require('../../../assets/fonts/Pokemon-Solid.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ImageBackground
          source={Background}
          style={styles.background}
          resizeMode="cover"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <StatusBar style="auto" />
              <View style={styles.content}>
                <Text style={styles.title}>Pokedex</Text>
                <Image
                  source={Charizard}
                  style={styles.image}
                  resizeMode="contain"
                />
                <TextInput placeholder="Username" style={styles.textInput} />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  autoCorrect={false}
                  returnKeyType="go"
                  style={styles.textInput}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <MaterialCommunityIcons name="pokeball" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    paddingTop: 80,
    justifyContent: 'space-around',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: refactorColors('black'),
    fontFamily: 'Pokemon-Solid',
  },
  image: {
    width: 200,
    height: 200,
  },
  textInput: {
    fontSize: 20,
    width: 200,
    height: 40,
    borderColor: refactorColors('black'),
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  icon: {
    fontSize: 60,
    textAlign: 'center',
    color: refactorColors('black'),
  },
});
