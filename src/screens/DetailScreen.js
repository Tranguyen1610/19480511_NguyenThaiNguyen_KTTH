import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import   Ionicons  from "react-native-vector-icons/Ionicons"

export default function DetailScreen({route}) {
    const nav = useNavigation();
  return (
   <SafeAreaView style={{backgroundColor:'#fff'}}>
    <View style={{flexDirection:'row', justifyContent:'space-between',padding:10}}>
        <TouchableOpacity
            onPress={()=>nav.navigate('HomeScreen')}>
        <Ionicons name='arrow-back' size={30} style={{backgroundColor:'#F0EFEF',width:40,height:40}}/>
        </TouchableOpacity>
        
        <Ionicons name='heart' size={30} style={{backgroundColor:'#F0EFEF',width:40,height:40}}/>
    </View>
    <Image 
        source={{uri:route.params.imgLink}}
        style={{
            width:'100%',
            height:350,
        }}/>
    <View style={{
        backgroundColor:'#9DFBD5',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderTopStartRadius:40,
        borderTopEndRadius:40,
        }}>
        <View
            style={{
                backgroundColor:'#DFDFDF',
                width:100,
                height:10,
                borderRadius:10,
                margin:10,
            }}></View>
        <Text style={{fontSize:30,fontWeight:'600',width:'100%'}}>{route.params.name}</Text>
        <View style={{flexDirection:'row',marginTop:20}}>
            <Text style={{color:'#00ECB2',backgroundColor:'#DFDFDF',padding:10,borderRadius:10,fontSize:30}}>+</Text>
            <Text style={{color:'#00ECB2',backgroundColor:'#fff',padding:10,fontSize:30,borderRadius:10}}>01</Text>
            <Text style={{color:'#00ECB2',backgroundColor:'#DFDFDF',padding:10,borderRadius:10,fontSize:30}}>+</Text>
            <Text style={{fontSize:30,fontWeight:'600',marginLeft:50}}>{route.params.price}$</Text>
        </View>
        
        <TouchableOpacity
        style={{backgroundColor:'#00ECB2',width:"90%",alignItems:'center',justifyContent:'center',marginTop:100,marginBottom:200,padding:15,borderRadius:10,}}>
        <Text style={{fontWeight:'500',fontSize:17,color:'#fff'}}>Buy Now</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({})