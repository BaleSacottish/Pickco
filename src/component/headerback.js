import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Platform } from "react-native/types";
import { Dimensions, TouchableOpacity, Text, View } from "react-native";

import { fontFamily,fontSize } from '../contrans/fonts';
import colors from '../contrans/colors';

import Ionicon from 'react-native-vector-icons/Ionicons';

const Headerback = ({ color = colors.blue_transparent_1, title, titleColor = colors.blue, hideButton = false }) => {
    const { height, width } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <View
            style={{
                height: height * 0.1,
                width: width,
                backgroundColor: colors.orange4,
                position: 'relative',
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '2%', flexDirection: 'row',
                opacity:0.8
            }}
        >
            {
                !hideButton ? (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            padding: '4%'
                        }}
                    >
                        <Ionicon name={'chevron-back-outline'} size={24} color={color} ></Ionicon>
                    </TouchableOpacity>
                ) : null
            }
        </View>
    )
}

export default Headerback