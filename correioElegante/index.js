import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Start from './src/pages/Start'
import Register from './src/pages/Register/register'

AppRegistry.registerComponent(appName, () => Register);
