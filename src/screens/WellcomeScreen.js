import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function WellcomeScreen() {
    const nav = useNavigation();
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }}>
      <Image 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDNW46u-KMdj08guZNCQNi3PFh13P0b7xgg&usqp=CAU'}}
        style={{width:200,height:200,borderRadius:100,}}/>
      <Text style={{fontSize:25,fontWeight:'600', marginTop:10}}>Welcome To Your Plant</Text>
      <Text style={{width:170,textAlign:'center',fontSize:15,marginTop:20}}>He who plants a tree love no one but himself</Text>
      <TouchableOpacity
        onPress={()=>nav.navigate("HomeScreen")}
        style={{backgroundColor:'#00ECB2',width:"90%",alignItems:'center',justifyContent:'center',marginTop:100,padding:15,borderRadius:10,}}>
        <Text style={{fontWeight:'500',fontSize:17,color:'#fff'}}>Get Startesd</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})