import { View, Text, Image } from 'react-native'
import React from 'react'

import { fontFamily, fontSize } from '../../../../contrans/fonts'
import colors from '../../../../contrans/colors'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const InfoAccount = () => {
  return (
    <View style={{ marginTop: 10, padding: 10, }}>
      <View>
        <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_20, marginTop: 5, color: colors.orange2 }}>My Activity</Text>

        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', }}>

          <View style={{ flexDirection: 'row', }}>
            <FontAwesome6 name={"display"} size={36} color={'#FD9A4D'} style={{ alignSelf: 'center', right: 4 }} />
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>2</Text>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>Matching</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', right: 25 }}>
            <FontAwesome6 name={"flag"} size={38} color={'#FD9A4D'} style={{ alignSelf: 'center', }} />
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>0 </Text>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>Co_op</Text>
            </View>
          </View>


        </View>

        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', }}>

          <View style={{ flexDirection: 'row', left: 5 }}>
            <FontAwesome6 name={"computer"} size={38} color={'#FD9A4D'} style={{ alignSelf: 'center', }} />
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>4</Text>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>Course</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', }}>
            <MaterialCommunityIcons name={"certificate"} size={38} color={'#FD9A4D'} style={{ alignSelf: 'center', }} />
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>4</Text>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11 }}>Certificate</Text>
            </View>
          </View>


        </View>

        <View style={{ marginTop: 10, }}>
          <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_20, marginTop: 5, color: colors.orange2 }}>Best performance</Text>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
            <Image source={require('../../../../assets/certi/cer1.png')} style={{ width: 180, height: 180, marginRight: 10 }} />
            <Image source={require('../../../../assets/certi/cer2.png')} style={{ width: 180, height: 180, }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
            <Image source={require('../../../../assets/certi/cer1.png')} style={{ width: 180, height: 180, marginRight: 10 }} />
            <Image source={require('../../../../assets/certi/cer2.png')} style={{ width: 180, height: 180, }} />
          </View>

        </View>



        <View style={{ marginBottom: 20 }}>

        </View>
      </View>
    </View>
  )
}

export default InfoAccount