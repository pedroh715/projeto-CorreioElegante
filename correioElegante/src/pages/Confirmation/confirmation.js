import React from 'react';

import { 
    Text, 
    View, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Image,
  } from 'react-native';

import LottieView from 'lottie-react-native'





export default function Confirmation(props) {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={{flex:1}}>
            </View>

            

            <View style={styles.containerBottom}>

            <LottieView
                    source={require('../../../checkbox.json')}
                    autoPlay={true}
                    loop={false}
                    style={{width:50, height: 50}}
                    resizeMode="cover"
                />

                <Text style={[styles.textTitle, {
                    marginTop: 10
                }]}>
                    Seu correio foi enviado com sucesso
                </Text>

                <Text>{props.route.params.userInfo.nome}</Text>

                <Image
                    source={require('../../assets/Envelope.png')}
                    style={{width: 295, height: 442}}
                >
                </Image>

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
  