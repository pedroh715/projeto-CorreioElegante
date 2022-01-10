import React from 'react';

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

import Lottie from 'lottie-react-native'

import checkbox from '../../../checkbox.json'




export default function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={{flex:1}}>
            </View>

            <View style={styles.containerBottom}>
               <Lottie resizeMode="contain" autoSize source={checkbox} autoPlay loop />
                <Text style={styles.textTitle}>
                    Seu correio foi enviado com sucesso
                </Text>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#B73058",
      justifyContent: 'center',
      alignItems: 'center',
    },

    containerBottom: {
        flex: 10,
        backgroundColor: '#FFF',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
  
    textTitle: {
      fontSize: 26,
      fontFamily: 'Poppins-Bold',
      color: '#2f394b',
      fontWeight: '700',
      width: 300,
      textAlign: 'center',
    },
})
  