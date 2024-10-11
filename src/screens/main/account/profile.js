import { View, Text, SafeAreaView, ImageBackground, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import { DemoStudentID } from '../../../firebase/dummydata/demoprofile'

import Feather from 'react-native-vector-icons/Feather'


import colors from '../../../contrans/colors'
import Headerback from '../../../component/headerback'
import { fontFamily, fontSize } from '../../../contrans/fonts'
import globalStyles from '../../../contrans/globlaeStyles'

import InfoAccount from './inacount/info'
import Resume from './inacount/Resume'


/**
 * 
 * @param {StackScreenProps<any, any>} props
 */


/**
 * @typedef {object} IAccount1
 */

/**
 * @typedef {object} IAccount2
 */

/**
   * 
   * @param {object} changed 
   * @param {1|2|3} page 
   */




const Profile = ({ navigation }) => {

  const [pageIndex, setPageIndex] = useState(0);
  const [dataPage1, setDataPage1] = useState();
  const [dataPage2, setDataPage2] = useState();


  const studentId = DemoStudentID[0];




  const MyTabBar = ({ navigation, navigate, props }) => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={[{ ...styles.tab_page }, pageIndex == 0 ? { backgroundColor: colors.orange1 } : { ...globalStyles.shadow_5 }]}
          onPress={() => setPageIndex(0)}
        >
          <Feather name={"monitor"} size={24} color={'#FD9A4D'}
            style={[{ ...styles.icon }, pageIndex == 0 ? { color: colors.white } : { ...globalStyles.shadow_5 }]} />
          <Text style={[{...styles.fontcolor}, pageIndex == 0 ? {color: colors.white} : { ...globalStyles.shadow_5 }]}>intro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ ...styles.tab_page }, pageIndex == 1 ? { backgroundColor: colors.orange1 } : { ...globalStyles.shadow_5 }]}
          onPress={() => setPageIndex(1)}
        >
          <Feather name={"file-minus"} size={24} color={'#FD9A4D'}
            style={[{ ...styles.icon }, pageIndex == 1 ? { color: colors.white } : { ...globalStyles.shadow_5 }]} />
          <Text style={[{...styles.fontcolor}, pageIndex == 1 ? {color: colors.white} : { ...globalStyles.shadow_5 }]}>Resume</Text>
        </TouchableOpacity>


      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headerback />
      <View style={{
        ...globalStyles.welcome_padding2,
      }}>
        <ScrollView>
          <View style={{ ...globalStyles.welcome_padding, borderRadius: 20, marginTop: 20, height: '100%' }}>
            <View style={{ padding: 5, alignItems: 'center', }}>
              <Image source={require('../../../assets/profile/profile.png')} style={{ alignSelf: 'center', }} />
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_20, marginTop: 5 }}>{studentId.Std_eng_Name}</Text>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_20, marginTop: 5 }}>{studentId.id}</Text>
            </View>
            <View style={{ marginTop: 5, alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row', }}>
                <Feather name={"phone"} size={20} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, marginLeft: 10, alignSelf: 'center' }}>{studentId.Std_Phone}</Text>
              </View>

              <View style={{ flexDirection: 'row', }}>
                <Feather name={"mail"} size={20} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, marginLeft: 10, alignSelf: 'center' }}>{studentId.Std_Email}</Text>
              </View>

              <View style={{ flexDirection: 'row', width: 140, }}>
                <Feather name={"map-pin"} size={20} color={'#494949'} style={{ marginTop: 5 }} />
                <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_14, marginLeft: 10, alignSelf: 'center', }}>{studentId.Std_address}</Text>
              </View>

            </View>

            {/* <RenderPage/> */}
            <MyTabBar navigation={navigation} />
            {
              pageIndex == 0 ? (
                <InfoAccount value={dataPage1} onChanged={(value) => onChanged(value, 1)} navigation={navigation} />
              ) :
                pageIndex == 1 ? (
                  <Resume value={dataPage2} onChanged={(value) => onChanged(value, 2)} navigation={navigation} />
                ) : null
            }




          </View>

        </ScrollView>
      </View>
    </SafeAreaView>

  )
}

export default Profile

const styles = StyleSheet.create({
  tab_page: {
    backgroundColor: colors.white2,
    paddingHorizontal: 17,
    marginTop: 10,
    borderRadius: 24,
    justifyContent: 'center',
    width: 80,
    height:80,
    marginRight: 10

  },
  icon: {
    alignSelf: 'center'
  },
  fontcolor:{
    fontFamily: fontFamily.bold, 
    fontSize: fontSize.font_12, 
    alignSelf: 'center', 
    color: colors.orange1,
  }
})