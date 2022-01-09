import React from 'react';

import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';



/* IMAGENS */
import imageTop from '../../assets/imageTop.png'

const Start = ({navigation}) => {
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Register"}]
    })
  }
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

        <Btn onPress={() => entrar()}/>
            
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

 
})

export default Start; 