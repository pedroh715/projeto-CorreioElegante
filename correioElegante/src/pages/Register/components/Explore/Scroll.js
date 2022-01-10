import { Component, useState, useEffect } from 'react'
import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from 'react-native'

import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler'

class Scroll extends Component {
  render() {   
    return(
      <View style={{marginLeft:13}} >
        <View>       
          <Image source={this.props.imageUri} style={{marginLeft: this.props.marginLeft,
            borderWidth: this.props.borderWidth, borderColor: this.props.borderColor}} />     
        </View>       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  press: {
    borderWidth:2,
    borderColor: '#000'
  }
})

export default Scroll