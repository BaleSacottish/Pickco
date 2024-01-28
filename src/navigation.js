import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import sigin from './screens/signin/signin';
import Tabs from './tabs';
import companydetails from './screens/main/matching/matlist/companydetails';
import CourseDetails from './screens/main/course/courestabs/courseDetails';

const Stack = createStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    presentation: 'modal',
                }}>
                <Stack.Screen name='sigin' component={sigin} />
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='CompanyDetails' component={companydetails} />
                <Stack.Screen name='CourseDetails' component={CourseDetails} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation