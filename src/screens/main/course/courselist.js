import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import globalStyles from '../../../contrans/globlaeStyles'
import Header from '../../../component/header'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

import colors from '../../../contrans/colors'

import Mycourse from './courestabs/mycourse'
import Popularcourse from './courestabs/popularcourse'


/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

/**
 * @typedef {object} ICoursePage1
 */

/**
 * @typedef {object} ICoursePage2
 */

/**
 * @typedef {object} ICoursePage3
 */


/**
   * 
   * @param {object} changed 
   * @param {1|2|3} page 
   */



const Courselist = ({navigation}) => {

  const [pageIndex, setPageIndex] = useState(0);
  const [dataPage1, setDataPage1] = useState();
  const [dataPage2, setDataPage2] = useState();




  const Coursetablist = () => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity
                style={[{ ...styles.tab_page }, pageIndex == 0 ? { backgroundColor: colors.orange1 } : { ...globalStyles.shadow_5 }]}
                onPress={() => setPageIndex(0)}
            >
                <FontAwesome6  name={"award"} size={24} color={'#FD9A4D'}
                    style={[{ ...styles.icon }, pageIndex == 0 ? { color: colors.white } : { ...globalStyles.shadow_5 }]} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[{ ...styles.tab_page }, pageIndex == 1 ? { backgroundColor: colors.orange1 } : { ...globalStyles.shadow_5 }]}
                onPress={() => setPageIndex(1)}
            >
                <FontAwesome6 name={"book-bookmark"} size={24} color={'#FD9A4D'}
                    style={[{ ...styles.icon }, pageIndex == 1 ? { color: colors.white } : { ...globalStyles.shadow_5 }]} />
            </TouchableOpacity>


        </View>
    )
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <View style={{
                ...globalStyles.welcome_padding
            }}>
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: colors.white3, justifyContent: 'space-between', width: '80%', height: 60, borderRadius: 20, padding: 10 }}>
                            <TextInput />
                            <Feather name={"search"} size={24} color={'#FD9A4D'} style={{ alignSelf: 'center' }} />
                        </View>
                       
                        <Coursetablist navigation={navigation} />
                        {
                            pageIndex == 0 ? (
                                <Popularcourse value={dataPage1} onChanged={(value) => onChanged(value, 1)} navigation={navigation} />
                            ) :
                                pageIndex == 1 ? (
                                    <Mycourse value={dataPage2} onChanged={(value) => onChanged(value, 2)} navigation={navigation} />
                                ) : null
                        }
                        

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
  )
}

export default Courselist

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