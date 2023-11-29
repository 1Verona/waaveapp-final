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


export default function Inicio() {
  
  const navigation = useNavigation()
  
  return (
    <Animatable.View animation={'fadeInLeft'}>
      <Text style={styles.instru}>Insira o IP abaixo no app Desktop</Text>
      <Text style={styles.ip}> WiFi IP: 10.0.0.59</Text>
      <Text style={styles.ip}> Port: 4747</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

    </Animatable.View>
  );
}
const styles = StyleSheet.create({
instru:{
  textAlign: 'center',
  fontSize: 21,
  marginTop: 50,
  marginBottom: 30,
},
ip:{
  marginLeft: 55,
  fontSize: 20,

},
buttonText:{
  textAlign: 'center',
  fontSize: 20,
  color: "white",
},
button:{
  marginTop: 30,
  textAlign: 'center',
  marginLeft: 50,
  backgroundColor: corla,
  width: 100,
  height: 30,
  borderRadius: 6,
  borderColor: "black"
}
})