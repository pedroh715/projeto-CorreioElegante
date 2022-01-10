import { Component } from 'react'
import React from 'react'
import {
    View,
    Image,
} from 'react-native'

import { TouchableHighlight } from 'react-native-gesture-handler'

class Scroll extends Component {
    _onPress() {
        borderWidth: 2
    }

    render() {
        return(
            
            <View style={{marginLeft: 13}}>
                <View>
                <TouchableHighlight>
                        <Image source={this.props.imageUri} style={{marginLeft: this.props.marginLeft}}/>     
                </TouchableHighlight>
                </View>
                  
                </View>
        )
    }
}

export default Scroll