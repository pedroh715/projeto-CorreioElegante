import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';

/* IMAGENS */
import champagne from '../../assets/champagne.png';
import cheese from '../../assets/cheese.png';
import fastFood from '../../assets/fast-food.png';
import french from '../../assets/french.png';

import Scroll from './components/Explore/Scroll'
import Btn from '../Register/components/Btn/Btn'

const Register = () => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setVisible(false),
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setVisible(true),
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

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
        
        <Btn marginBottom={30}></Btn>



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
    fontFamily: 'Poppins',
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
  }
})

export default Register; 