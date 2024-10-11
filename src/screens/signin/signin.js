import { View, Text, SafeAreaView, Image, TextInput, ImageBackground,TouchableOpacity } from 'react-native'


import React from 'react'

import colors from '../../contrans/colors';
import Botton from '../../component/button';
import { fontFamily,fontSize } from '../../contrans/fonts';
import globalStyles from '../../contrans/globlaeStyles';

import FontAwesome from 'react-native-vector-icons/FontAwesome'


const sigin = ({navigation}) => {

    const BackgroundLinear = () => {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <ImageBackground source={require('../../assets/login/FrameBGlogin.png')} resizeMode="cover">
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>


                        <View >

                            <View>
                                
                                <Text style={{ alignSelf: 'center', fontSize: fontSize.font_28, fontFamily: fontFamily.bold, color: colors.purple3 }}>PICKCO</Text>
                                <Text style={{ alignSelf: 'center', fontSize: fontSize.font_24, fontFamily: fontFamily.bold, color: colors.orange1 }}>PICK YOUR SUITED COOPERATE</Text>
                            </View>




                        </View>






                    </View>
                </ImageBackground>
            </SafeAreaView>

        )
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/login/FrameBGlogin.png')} resizeMode="cover" style={{ justifyContent: 'center', height: '105%', }}>
                <View style={{ padding: 20, justifyContent: 'space-around' }}>


                    <View style={{ marginTop: 10 }}>

                        <View style={{ marginTop: 20, bottom: 80 }}>
                            <Image source={require('../../assets/Logo1.png')} style={{ width: "50%", height: 250, alignSelf: 'center', }} />
                            <Text style={{ alignSelf: 'center', fontSize: fontSize.font_28, fontFamily: fontFamily.bold, color: colors.purple3 }}>PICKCO</Text>
                            <Text style={{ alignSelf: 'center', fontSize: fontSize.font_24, fontFamily: fontFamily.bold, color: colors.orange1 }}>PICK YOUR SUITED COOPERATE</Text>

                        </View>
                        <View style={{ marginTop: 5 }}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', backgroundColor: colors.white,borderRadius:20,height:60,padding:10 }}>
                                <TextInput placeholder='Username' placeholderTextColor={colors.orange2} style={{width:'80%'}}/>
                                <FontAwesome name="user-circle-o" color="#FF895C" size={30} />
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', backgroundColor: colors.white,borderRadius:20,height:60,padding:10,marginTop:20}}>
                                <TextInput placeholder='Password' placeholderTextColor={colors.orange2} style={{width:'80%'}} />
                                <FontAwesome name="lock" color="#FF895C" size={30} style={{right:5}} />
                            </View>


                        </View>
                        <View style={{ marginTop: 20,flexDirection:'column' }}>
                            <Botton
                                text='Sign in'
                                textStyle={{
                                    alignSelf: 'center'
                                }}
                                containerStyle={{
                                    paddingHorizontal: 17,
                                    marginTop: 10,
                                    flexDirection: 'column',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    width: 200,
                                    height:60
                                }}
                                activeOpacity={0.75}
                                onPress={() => navigation.navigate('Tabs')}
                            >
                            </Botton>
                            <TouchableOpacity style={{alignSelf:'center',marginTop:10}}>
                                    <Text style={{ alignSelf: 'center', fontSize: fontSize.font_20, fontFamily: fontFamily.bold, color: colors.white,textDecorationLine:'underline' }}>Register</Text>
                            </TouchableOpacity>
                        </View>






                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default sigin