import { View, Text, SafeAreaView, TouchableOpacity,ScrollView,Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

import colors from '../../../../contrans/colors'
import { fontFamily,fontSize } from '../../../../contrans/fonts'

import { Mycoursedeme } from '../../../../firebase/dummydata/democourse'

const Mycourse = () => {

  const [CourseID, setCourseID] = useState(Mycoursedeme)

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ alignSelf: 'flex-end', padding: 20 }}>
        <TouchableOpacity style={{ backgroundColor: colors.white2, width: 60, height: 30, borderRadius: 20, justifyContent: 'center' }}>
        <FontAwesome6 name={"filter"} size={18} color={'#FD9A4D'}
             style={styles.icon}   />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 1 }}>

        <ScrollView>
          {Mycoursedeme.map((item, index) => (

            <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', height: 200, backgroundColor: colors.orange2, borderRadius: 50, opacity: 0.9, }}>
              <View style={{ justifyContent: 'center', backgroundColor: colors.orange3, width: 144, height: 200, borderRadius: 50, alignSelf: 'center' }}>
                <Image source={require('../../../../assets/Logo1.png')} style={{ alignSelf: 'center', width: 80, height: 120, marginTop: 30, }} />
              </View>
              <View style={{ padding: 10, width: '50%' }}>
                <Text key={index} style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_16, color: colors.white }}>{item.Course_name}</Text>
                <Text key={index} style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_14, color: colors.white, marginTop: 10 }}>{item.Description2}</Text>

                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <TouchableOpacity style={{ backgroundColor: colors.white, marginTop: 10, height: 35, width: 80, borderRadius: 20, justifyContent: 'center', }}
                    onPress={() => navigation.navigate('CourseDetails')}
                  >
                    <Text style={{ alignSelf: 'center' }}>View more</Text>
                  </TouchableOpacity >

             
                </View>

              </View>


            </View>

          ))}
        </ScrollView>

        <View style={{ marginBottom: 30 }}>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default Mycourse

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
      alignSelf: 'center'
  }
})