import { View, Text, SafeAreaView, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'


import { IPage3 } from '../matchinglist'

import Headerback from '../../../../component/headerback'
import globalStyles from '../../../../contrans/globlaeStyles'
import { fontFamily, fontSize } from '../../../../contrans/fonts'

import { DemoCompany } from '../../../../firebase/dummydata/democompany'

/**
 * @param {object} props
 * @param {IPage3} props.value
 * @param {(value: string) => void} props.onChanged
 */

const companydetails = () => {

  const CompanyId = DemoCompany[0];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headerback />
      <View style={{
        ...globalStyles.welcome_padding2,
      }}>
        <ScrollView>
          <Image source={require('../../../../assets/Logo1.png')} style={{ width: 120, height: 120, marginTop: 10, alignSelf: 'center' }} />
          <View style={{ ...globalStyles.welcome_padding, borderRadius: 20, marginTop: 20, height: '100%' }}>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.font_20 }}>{CompanyId.Company_Name}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: fontSize.font_18, }}>{CompanyId.Company_CEO_name}</Text>
              <Text style={{ fontSize: fontSize.font_18, marginTop: 5 }}>{CompanyId.Company_Email}</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Feather name={"star"} size={30} color={'#FD9A4D'} style={{ alignSelf: 'center' }} />
              <Feather name={"star"} size={30} color={'#FD9A4D'} style={{ alignSelf: 'center' }} />
              <Feather name={"star"} size={30} color={'#FD9A4D'} style={{ alignSelf: 'center' }} />
              <Feather name={"star"} size={30} color={'#FD9A4D'} style={{ alignSelf: 'center' }} />
              <Text style={{ marginLeft: 10, fontSize: fontSize.font_18, alignSelf: 'center' }}>{CompanyId.Company_rating}</Text>
            </View> */}


            <View style={{ marginTop: 15, }}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name={"file-text"} size={30} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ marginLeft: 10, fontSize: fontSize.font_18, alignSelf: 'center' }}>ความต้องการของสถานประกอบการ :</Text>
              </View>

              <View style={{ marginTop: 5, width: 300 }}>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>ตำแหน่งงานที่ต้องการ : {CompanyId.Company_position_requeir}</Text>
                <Text style={{ fontSize: fontSize.font_18, left: 40, marginTop: 5 }}>ลักษณะงานที่นักศึกษาต้องปฏิบัติ : {CompanyId.Company_descript_position}</Text>
              </View>
            </View>

            <View style={{ marginTop: 15, }}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name={"user"} size={30} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ marginLeft: 10, fontSize: fontSize.font_18, alignSelf: 'center' }}>จำนวนที่รับ : {CompanyId.Company_amount_requirements}</Text>
              </View>
            </View>

            <View style={{ marginTop: 15, }}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name={"dollar-sign"} size={30} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ marginLeft: 10, fontSize: fontSize.font_18, alignSelf: 'center' }}>ค่าตอบแทน : {CompanyId.Company_Compensation}</Text>
              </View>


            </View>



            <View style={{ marginTop: 15, width: 300 }}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name={"clock"} size={30} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ marginLeft: 10, fontSize: fontSize.font_18, alignSelf: 'center' }}>ระยะเวลาในการทำงาน :</Text>
              </View>

              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>เริ่มงานตั้งแต่เวลา : {CompanyId.Company_clocktowork} น.</Text>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>จำนวนชั่วโมงการทำงาน: {CompanyId.Company_timestowork} ชั่วโมงต่อสัปดาห์</Text>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>ทำงานวันจันทร์ ถึง วันศุกร์ </Text>
              </View>
            </View>

            <View style={{ marginTop: 15, }}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name={"map"} size={30} color={'#494949'} style={{ alignSelf: 'center', marginTop: 5 }} />
                <Text style={{ marginLeft: 10, fontSize: fontSize.font_18, alignSelf: 'center' }}>ที่อยู่  : {CompanyId.Company_address}</Text>
              </View>

              <View style={{ marginTop: 5, marginBottom: 50 }}>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>ตำบล : {CompanyId.Company_distric1} </Text>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>อำเภอ : {CompanyId.Company_provinc} </Text>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>จังหวัด : {CompanyId.Company_distric} </Text>
                <Text style={{ fontSize: fontSize.font_18, left: 40 }}>ประเทศ : {CompanyId.Company_country} </Text>
              </View>
            </View>



          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default companydetails