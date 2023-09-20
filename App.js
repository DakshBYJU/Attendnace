import * as React  from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
 

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AppHeader from './components/AppHeader';
import HomeScreen from './Screens/HomeScreen';
import SummaryScreen from './Screens/SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';

export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
  

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
 SummaryScreen:SummaryScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)


