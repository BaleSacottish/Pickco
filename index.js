/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Navigation from '../PickcoPlus/src/navigation'

AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Navigation/>
    )
}