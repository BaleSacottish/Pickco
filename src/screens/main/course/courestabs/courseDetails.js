import { View, Text, SafeAreaView, ImageBackground, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather'


import globalStyles from '../../../../contrans/globlaeStyles'
import Headerback from '../../../../component/headerback'
import colors from '../../../../contrans/colors'

import { fontFamily, fontSize } from '../../../../contrans/fonts'

import { Democurse } from '../../../../firebase/dummydata/democourse'

const CourseDetails = ({ navigation }) => {

  const courseID = Democurse[0];

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Headerback />
      <View style={{
        ...globalStyles.welcome_padding2,
      }}>
        <ScrollView>
          <Image source={require('../../../../assets/Logo1.png')} style={{ width: 140, height: 160, alignSelf: 'center' }} />
          <View style={{ ...globalStyles.welcome_padding, borderRadius: 20, height: '100%', }}>
            <View style={{ marginTop: 10, width: '100%', justifyContent: 'space-around', padding: 10, }}>
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_20, color: colors.orange1, width: '75%' }}>{courseID.Course_name}</Text>
                <View style={{ marginLeft: 20, flexDirection: 'column' }} >
                  <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 20, backgroundColor: colors.grey_50 }} >
                    <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, alignSelf: 'center' }}>{courseID.Cost}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 20, backgroundColor: colors.grey_50, marginTop: 5, alignSelf: 'center' }}  >
                    <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, alignSelf: 'center' }}>Join</Text>
                  </TouchableOpacity>
                </View>
              </View>


              <View style={{ marginTop: 10, }}>
                <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.black, width: '80%' }}>{courseID.Description}</Text>
              </View>


              <View style={{ marginTop: 10, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ width: 120, alignItems: 'center', height: 80 }}>
                  <Feather name={"file-text"} size={28} color={'#FD9A4D'}
                    style={styles.icon} />
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_14, color: colors.grey_11, alignSelf: 'center', marginTop: 5 }}>{courseID.Subject}</Text>
                </View>
                <View style={{ width: 120, alignItems: 'center', height: 80 }}>
                  <Feather name={"clock"} size={28} color={'#FD9A4D'}
                    style={styles.icon} />
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_14, color: colors.grey_11, alignSelf: 'center', marginTop: 5 }}>{courseID.Class_houurs} :hr</Text>
                </View>

                <View style={{ width: 120, alignItems: 'center', height: 80 }}>
                  <Feather name={"map-pin"} size={28} color={'#FD9A4D'}
                    style={styles.icon} />
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_14, color: colors.grey_11, alignSelf: 'center', marginTop: 5 }}>{courseID.Location}</Text>
                </View>
              </View>

              <View style={{ marginTop: 10 }}>

                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, }}>Specified_criteria</Text>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11, marginTop: 5 }}>{courseID.Specified_criteria}</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, }}>Limit_class</Text>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11, marginTop: 5 }}>{courseID.Limit_class} : Unit</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, }}>Lessons</Text>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11, marginTop: 5 }}>{courseID.Lessons} : Lessons</Text>
                </View>


                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, }}>Lecture</Text>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11, marginTop: 5 }}>{courseID.Instrutor}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, }}>Phone number</Text>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11, marginTop: 5 }}>{courseID.Instrutor_Phone}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_18, color: colors.orange1, }}>Email</Text>
                  <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.grey_11, marginTop: 5 }}>{courseID.Instrutor_Email}</Text>
                </View>


              </View>

              <View style={{ marginBottom: 40 }}></View>



            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default CourseDetails

const styles = StyleSheet.create({
  tab_page: {
    backgroundColor: colors.white2,
    paddingHorizontal: 17,
    marginTop: 10,
    borderRadius: 24,
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginRight: 10

  },
  icon: {

  }
})