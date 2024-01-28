import { View, Text, SafeAreaView, Image, ScrollView, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import { IPage2 } from '../matchinglist'
import colors from '../../../../contrans/colors'

import { democo_op } from '../../../../firebase/dummydata/democo_op'

/**
 * @param {object} props
 * @param {IPage2} props.value
 * @param {(value: string) => void} props.onChanged
 */

const Cooplist = ({navigation}) => {

  const handlePress = () => {
    // Handle the press event here
    Alert.alert('Co-op Success');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{}}>

        {democo_op.map((item, index) => (
          <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 5, height: 140 }}>
              <Image source={require('../../../../assets/Logo1.png')} style={{ width: 60, height: 80, alignSelf: 'center' }} />
              <View>
                <Text>{item.Company_Name}</Text>
                <Text style={{ marginTop: 10 }}>{item.Company_Phone}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Pressable style={{ backgroundColor: colors.orange1, marginTop: 10, height: 35, width: 90, borderRadius: 20, justifyContent: 'center' }}
                    onPress={() => navigation.navigate('CompanyDetails')}
                  >
                    <Text style={{ alignSelf: 'center' }}>View more</Text>
                  </Pressable>
                  <Pressable style={{ backgroundColor: colors.grey_11, marginTop: 10, height: 35, width: 90, borderRadius: 20, justifyContent: 'center', marginLeft: 10 }}
                    onPress={handlePress}
                  >
                    <Text style={{ alignSelf: 'center', colors: colors.white }}>Co-op</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        ))}
      </View>


    </SafeAreaView>
  )
}

export default Cooplist