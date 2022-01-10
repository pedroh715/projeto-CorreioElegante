import React from 'react';

import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import Btn from '../Register/components/Btn/Btn'

/* IMAGENS */
import imageTop from '../../assets/imageTop.png'
import LinearGradient from 'react-native-linear-gradient';


export default function Start(props) {
  

  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
        <Image source={imageTop}></Image>
      </View>
      
      <View style={[styles.container, { 
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: '#fff'
      }]}>
        <Text style={[styles.textTitle, {
          marginBottom: 17,
          lineHeight: 35,
          marginTop: 50
        }]}>
          Surpreenda seu amor</Text>

        <Text style={[styles.textTitle, {
            fontSize: 18,
            color: '#8d8d8d',
            lineHeight: 30
        }]}>
          Envie mensagens e presentes incríveis</Text>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')} >
            <LinearGradient 
            colors={['#E06C88', '#B73058']} 
            style={[styles.button, {marginTop: 0}]}
            useAngle={true}
            angle={130}
            >
            <Text style={[styles.textButton]}>COMEÇAR</Text>
            </LinearGradient>
          </TouchableOpacity>
            
      </View>
    </View>

  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#B73058",
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 37,
    fontFamily: 'Poppins-Bold',
    color: '#2f394b',
    fontWeight: '700',
    width: 300,
    textAlign: 'center',
    marginBottom: 40,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#FFF',
    fontWeight: '700',
  },
    button: {
    width: 295,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }

 
})