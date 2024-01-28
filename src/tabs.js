import { View, TouchableOpacity, Text, Animated, StyleSheet  } from 'react-native'
import React, { useState, useEffect } from 'react'

import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'

import colors from './contrans/colors'
import { fontFamily,fontSize } from './contrans/fonts'
import globalStyles from './contrans/globlaeStyles'

import Feather from 'react-native-vector-icons/Feather'

import Homepage from './screens/main/homepage/homepage'
import Courselist from './screens/main/course/courselist'
import Matchinglist from './screens/main/matching/matchinglist'
import Profile from './screens/main/account/profile'

/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

 const Tab = createBottomTabNavigator();
 const getColour = () => [Math.floor(Math.random() * colors.length)];


 const Tabs = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true
            }}>
            <Tab.Screen name="HomeScreens" component={Homepage} />
            <Tab.Screen name="Courselist" component={Courselist} />
            <Tab.Screen name="MatcScreens" component={Matchinglist} />
            <Tab.Screen name="accountScreens" component={Profile} />
            
        </Tab.Navigator>
    )
}



const TabBar = ({ state, descriptors, navigation, focused }) => {

    const [color, setColour] = useState(getColour());
    const handleClick = () => { setColour(getColour()); }
    
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 8, backgroundColor: '#F4F4F4', alignItems: 'center' }}>
  
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('HomeScreens')}
          style={{ width: 48, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: state.index == 0 ? 'white' : colors.blue }}
        >
  
          <Feather
            name={"home"} 
            size={24}
            color={state.index == 0? colors.orange1 : '#AAAAAA80'}
          />
        </TouchableOpacity>
  
  
  
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('Courselist')}
          style={{ width: 48, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: [1, 4].includes(state.index)? 'white' : colors.blue }}
        >
          <Feather
            name={"book-open"}
            size={24}
            color={[1, 4].includes(state.index)? colors.orange1 : '#AAAAAA80'}
          />
        </TouchableOpacity>
  
  
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('MatcScreens')}
          style={{ width: 48, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: [2, 5].includes(state.index)? 'white' : colors.blue }}
        >
          <Feather
            name={"monitor"}
            size={24}
            color={[2, 5].includes(state.index)? colors.orange1 : '#AAAAAA80'}
          />
        </TouchableOpacity>
  
  
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('accountScreens')}
          style={{ width: 48, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: state.index == 3 ? 'white' : colors.blue }}
        >
          <Feather
            name={"user"}
            size={24}
            color={state.index == 3? colors.orange1 : '#AAAAAA80'}
          />
        </TouchableOpacity>
  
      </View>
    );
  }

export default Tabs