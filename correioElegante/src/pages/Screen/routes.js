import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Start/index'
import Register from '../Register/register'

const Stack = createStackNavigator()

function App() {
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{headerShown:false}} />

            <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{headerShown:false}} />
            
        </Stack.Navigator>
    )
}

export default App