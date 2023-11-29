import React from 'react'
import {
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
 } from 'react-native'
import { View } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { PaperProvider, TextInput } from 'react-native-paper';

const corla = '#34a094'

import camerafake from "../../assets/homi.jpeg"
export default function Camera(){
    const navigation = useNavigation()
    return(
        <Animatable.View animation={'fadeInUp'}>
            <Text style={styles.texto1}> Camera conectada! </Text>
            <Text style={styles.texto2}> Teste um dos gestos para começar </Text>
          <Animatable.Image 
          style={styles.camera}
          source={camerafake}
          resizeMode='contain'
          />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Desconectar</Text>
        </TouchableOpacity>
        </Animatable.View>
    );
}
const styles = StyleSheet.create({
    camera:{
        width: '100%',
        marginTop: 80,
    },
    texto1:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
    },
    texto2:{
        textAlign: 'center',
        fontSize: 16,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 17,

        color: "white",
      },
      button:{
        marginTop: 30,
        textAlign: 'center',
        marginLeft:140,
        backgroundColor: corla,
        width: 130,
        height: 40,
        borderRadius: 6,
        borderColor: "black",
        padding:8,
      }
})