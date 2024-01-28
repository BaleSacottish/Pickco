import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Platform } from "react-native/types";
import { Dimensions, TouchableOpacity, Text, View } from "react-native";

import { fontFamily,fontSize } from '../contrans/fonts';

import colors from "../contrans/colors";

const Header = ({ }) => {

    const { height, width } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <View
            style={{
                height: height * 0.1,
                width: width,
                backgroundColor: colors.white,
                position: 'relative',
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '2%', flexDirection: 'row'
            }}
        >
            <Text style={{alignSelf: 'center', fontSize: fontSize.font_20, fontFamily: fontFamily.bold, color: colors.orange1 }}>PICKCO</Text>
        </View>
    )
}

export default Header