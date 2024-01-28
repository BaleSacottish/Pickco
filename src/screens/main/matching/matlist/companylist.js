import { View, Text, SafeAreaView, Image, ScrollView, Pressable,Alert,TouchableOpacity } from 'react-native'
import React,{ useState, useEffect } from 'react'

import { IPage1 } from '../matchinglist'
 import Feather from 'react-native-vector-icons/Feather'

 import colors from '../../../../contrans/colors'
 import { fontFamily,fontSize } from '../../../../contrans/fonts'
 import { DemoCompany } from '../../../../firebase/dummydata/democompany'

/**
 * @param {object} props
 * @param {IPage1} props.value
 * @param {(value: string) => void} props.onChanged
 */



const Companylist = ({navigation}) => {

  const navigateToDetails = ({ item }) => {
    navigation.navigate('CompanyDetails');
  };

  const CompanyId = DemoCompany[0];


  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View style={{ padding: 10 }}>
        <View>
          <ScrollView horizontal={true}>
            {DemoCompany.map((item, index) => (

              <View style={{ flexDirection: 'row', backgroundColor: colors.orange1, width: 325, alignSelf: 'center', height: 140, marginLeft: 10, padding: 0.1, borderRadius: 20, }}>
                <View style={{ backgroundColor: colors.white3, borderRadius: 20, width: 140, height: 141, justifyContent: 'center', }}>
                  <Image source={require('../../../../assets/Logo1.png')} style={{ width: 80, height: 80, alignSelf: 'center', }} />
                </View>
                <View style={{ borderRadius: 20, width: 185, height: 141, padding: 10 }} >
                  <Text >{item.Company_Name}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Feather name={"star"} size={24} color={'#fffD'} />
                    <Text style={{ marginLeft: 10, alignSelf: 'center' }}>{item.Company_rating}</Text>
                  </View>
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ backgroundColor: colors.white, width: 80, height: 30, borderRadius: 20, marginRight: 10, justifyContent: 'center' }}
                     onPress={() => navigation.navigate('CompanyDetails',{ id: item.Company_id})}>
                      <Text style={{ alignSelf: 'center' }}>View more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: colors.grey_11, width: 80, height: 30, borderRadius: 20, justifyContent: 'center' }}>
                      <Text style={{ alignSelf: 'center', color: colors.white }}>Get co_op</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginTop: 5, fontSize: fontSize.font_16, fontFamily: fontFamily.bold, color: colors.grey_11 }}>General Company</Text>
          <ScrollView horizontal={true}>
            {DemoCompany.map((item, index) => (

              <View style={{ backgroundColor: colors.orange1, width: 180, alignSelf: 'center', height: 260, marginLeft: 10, padding: 10, borderRadius: 20, marginTop: 10 }}>
                <View style={{ backgroundColor: colors.white3, borderRadius: 20, width: 100, height: 80, justifyContent: 'center', alignSelf: 'center' }}>
                  <Image source={require('../../../../assets/Logo1.png')} style={{ width: 40, height: 60, alignSelf: 'center', }} />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: 'bold', fontSize: fontSize.font_16, color: colors.white }}>{item.Company_Name}</Text>
                  <Text style={{ color: colors.white, marginTop: 10 }}>Job_require :{item.Company_position_requeir}</Text>
                </View>
                <View style={{ marginTop: 10, alignSelf: 'center' }}>
                  <TouchableOpacity style={{ backgroundColor: colors.white, width: 80, height: 30, borderRadius: 20, justifyContent: 'center', }}
                   onPress={navigateToDetails}>
                    <Text style={{ alignSelf: 'center' }}>View more</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: colors.grey_11, width: 80, height: 30, borderRadius: 20, justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ alignSelf: 'center', color: colors.white }}>Get co_op</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 20,marginBottom:40 }}>
          <Text style={{ marginTop: 5, fontSize: fontSize.font_16, fontFamily: fontFamily.bold, color: colors.grey_11 }}>Goverments Company</Text>
          <ScrollView horizontal={true}>
            {DemoCompany.map((item, index) => (

              <View style={{ backgroundColor: colors.purple3, width: 180, alignSelf: 'center', height: 280, marginLeft: 10, padding: 10, borderRadius: 20, marginTop: 10 }}>
                <View style={{ backgroundColor: colors.white3, borderRadius: 20, width: 100, height: 80, justifyContent: 'center', alignSelf: 'center' }}>
                  <Image source={require('../../../../assets/Logo1.png')} style={{ width: 40, height: 60, alignSelf: 'center', }} />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: 'bold', fontSize: fontSize.font_16, color: colors.white }}>{item.Company_Name}</Text>
                  <Text style={{ color: colors.white, marginTop: 10 }}>Job_Requeirment :{item.Company_position_requeir}</Text>
                </View>
                <View style={{ marginTop: 10, alignSelf: 'center' }}>
                  <TouchableOpacity style={{ backgroundColor: colors.white, width: 80, height: 30, borderRadius: 20, justifyContent: 'center', }}
                   onPress={navigateToDetails}
                  >
                    <Text style={{ alignSelf: 'center' }}>View more</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: colors.grey_11, width: 80, height: 30, borderRadius: 20, justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ alignSelf: 'center', color: colors.white }}>Get co_op</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

        </View>



      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Companylist