import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

export default function Btn(){
        return(
            <TouchableOpacity style={[styles.button, {
            }]}>
            <LinearGradient 
            colors={['#E06C88', '#B73058']} 
            style={[styles.button, {marginTop: 0}]}
            useAngle={true}
            angle={130}
            >
            <Text style={[styles.textButton]}>COMEÇAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        )
    }

const styles = StyleSheet.create({
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