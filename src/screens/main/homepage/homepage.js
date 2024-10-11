import { View, Text, SafeAreaView, Image, FlatList, Pressable, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import globalStyles from '../../../contrans/globlaeStyles'
import Header from '../../../component/header'
import colors from '../../../contrans/colors'
import { fontFamily,fontSize } from '../../../contrans/fonts'
import LinearGradient from 'react-native-linear-gradient'

import { DemoCompany } from '../../../firebase/dummydata/democompany'
import { Democurse } from '../../../firebase/dummydata/democourse'



const Homepage = ({navigation}) => {

  const [companyID, setCompanyID] = useState(DemoCompany)
  const [CourseID, setCourseID] = useState(Democurse)

  const [companyList, setCompanyList] = useState([])

  const handlePress = () => {
    // Handle the press event here
    Alert.alert('Button Pressed', 'You pressed the button!');
  };

  const addCompanyItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "Testcol"), {
        companyID: companyID,
        isChecked: false,
      });
      console.log("Wirte Doc", docRef.id)
    } catch (e) {
      console.error("erro adding")
    }
  }

  const getCompanyID = async () => {
    const querySnapshot = await getDocs(collection(db, "CompanyID"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data())

    });
  };


  return (
     <SafeAreaView style={{ flex: 1, }}>
      <Header />
      <View style={{
        ...globalStyles.welcome_padding,
      }}>
        <ScrollView>
          <View style={{ marginTop: 20, flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require('../../../assets/profile/profile.png')} style={{ width: "40%", height: 145, alignSelf: 'center', }} />
            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: fontSize.font_18, fontFamily: fontFamily.bold, color: colors.black }}>Patiphat Mitsanthia</Text>
            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: fontSize.font_18, fontFamily: fontFamily.bold, color: colors.black }}>B6311245</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ marginTop: 5, fontSize: fontSize.font_16, fontFamily: fontFamily.bold, color: colors.grey_11 }}>Companyintroduction</Text>


            <ScrollView horizontal={true}>
              {DemoCompany.map((item, index) => (
                <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 10, width: 180, height: 280, backgroundColor: colors.orange2, borderRadius: 20, justifyContent: 'space-between', opacity: 0.9 }}>
                  <Image source={require('../../../assets/Logo1.png')} style={{ alignSelf: 'center', width: 80, height: 120, marginTop: 30 }} />
                  <LinearGradient
                    colors={['#F2F2F2', '#2B2B2B']}
                    style={{ borderRadius: 20, height: '40%', justifyContent: 'center', padding: 10, opacity: 0.9 }}
                  >
                    <Text key={index}>{item.Company_Name}</Text>
                    <Pressable style={{ backgroundColor: colors.white, marginTop: 10, height: 25, width: 80, borderRadius: 20, justifyContent: 'center' }}
                      onPress={() => navigation.navigate('CompanyDetails')}
                    >
                      <Text style={{ alignSelf: 'center' }}>View more</Text>
                    </Pressable>
                  </LinearGradient>


                </View>
              ))}
            </ScrollView>


          </View>

          <View style={{ marginTop: 20, width: '100%' }}>
            <Text style={{ marginTop: 5, fontSize: fontSize.font_16, fontFamily: fontFamily.bold, color: colors.grey_11 }}>Courseintroduction</Text>
            <ScrollView horizontal={true}>
              {Democurse.map((item, index) => (

                <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 10, width: 180, height: 280, backgroundColor: colors.orange2, borderRadius: 20, justifyContent: 'space-between', opacity: 0.9,marginBottom:40 }}>
                  <Image source={require('../../../assets/Logo1.png')} style={{ alignSelf: 'center', width: 80, height: 120, marginTop: 30 }} />
                  <LinearGradient
                    colors={['#F2F2F2', '#2B2B2B']}
                    style={{ borderRadius: 20, height: '40%', justifyContent: 'center', padding: 10, opacity: 0.9, }}
                  >
                    <Text key={index} style={{}}>{item.Course_name}</Text>
                    <Pressable style={{ backgroundColor: colors.white, marginTop: 10, height: 25, width: 80, borderRadius: 20, justifyContent: 'center' }}
                      onPress={() => navigation.navigate('CourseDetails')}
                    >
                      <Text style={{ alignSelf: 'center' }}>View more</Text>
                    </Pressable>
                  </LinearGradient>


                </View>

              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Homepage