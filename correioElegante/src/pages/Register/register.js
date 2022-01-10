import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Pressable,
  Alert,
} from 'react-native';

import Scroll from './components/Explore/Scroll'
import Btn from '../Register/components/Btn/Btn'

const Register = (props) => {

  const [errorEmail, setErrorEmail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
 
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.containerTop}>

        <View style={styles.identify}>
          <Text style={styles.subTitle}>
            Você gostaria de se identificar?  
          </Text>
          <TextInput style={styles.input} placeholder='Digite seu nome ou apelido' placeholderTextColor="#8D8D8D"></TextInput>
        </View>

      </View>

      <View style={[styles.container, {
        backgroundColor: '#FFF',
        flex: 3,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
      }]}>
        
        <ScrollView scrollEventThrottle={4}>
          <View>
            <Text style={[styles.title, {
              marginTop: 30,
            }]}>
              Escolha uma refeição abaixo
            </Text>
            <View style={{height: 91}}>
              
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
              
                <Scroll imageUri={require('../../assets/fast-food.png')} marginLeft={19}/>    
                <Scroll imageUri={require('../../assets/champagne.png')}/>                    
                <Scroll imageUri={require('../../assets/cheese.png')}/>    
                <Scroll imageUri={require('../../assets/french.png')}/>    

              </ScrollView>
            </View>
          </View>
        </ScrollView>
        
        <View style={{alignItems: 'center', marginBottom: 32}}>
          <View style={{width: 323}}>
            <Text style={[styles.title, {paddingHorizontal: 0, marginBottom: 4}]}>
              Email
            </Text>
            <TextInput style={[styles.input, {
              borderWidth: 2,
              borderColor: '#B73058'
            }]} placeholder='Digite o email dele ou dela' placeholderTextColor="#8D8D8D"></TextInput>
          </View>
        </View>

        <View>
          <View style={{width: 323, marginBottom:30}}>
            <Text style={[styles.title, {paddingHorizontal: 0, marginBottom: 4}]}>
              Surpreenda
            </Text>
            <TextInput style={[styles.input, {
              borderWidth: 2,
              borderColor: '#B73058',
              height: 95,
              textAlignVertical: 'top',
            }]} placeholder='Digite o email dele ou dela' placeholderTextColor="#8D8D8D"></TextInput>
          </View>
        </View>
        
  
        <TouchableOpacity style={[styles.button, {marginBottom:30}]} onPress={() => props.navigation.navigate('Confirmation')}  >
            <LinearGradient 
            colors={['#E06C88', '#B73058']} 
            style={[styles.button, {marginTop: 0}]}
            useAngle={true}
            angle={130}
            >
            <Text style={[styles.textButton]}>ENVIAR CORREIO</Text>
            </LinearGradient>
          </TouchableOpacity>


      </View>

    </SafeAreaView>
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

  containerTop: {
    flex: 1,
    width: '100%',
    backgroundColor: "#B73058",
    justifyContent: 'center',
    alignItems: 'center',
  },

  identify: {
    width: 323,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#2F394B',
    marginBottom:20,
    paddingHorizontal: 35,
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'white',
    marginBottom: 21,
  },
  input: {
    backgroundColor: 'white',
    width: 323,
    height: 48,
    borderRadius: 10,
    fontWeight: '700',
    paddingLeft: 10
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
  },
  press: {
    borderWidth: 2,
    borderColor: '#000'
  },
  normal: {
    borderWidth: 0
  }
})

export default Register; 