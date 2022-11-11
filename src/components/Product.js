import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";


export default function Product({item}) {
    const nav = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>nav.navigate({name:'DetailScreen', params: item})}
        style={{
            backgroundColor:'#fff',
            padding:10,
            margin:2,
            borderRadius:5,
        }}>
        <Image 
            source={{uri:item.imgLink}}
            style={{width:150,height:150}}/>
        <Text style={{fontSize:13,color:'#797A79'}}>{item.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,fontWeight:'500'}}>{item.price}$</Text>
            <AntDesign name='shoppingcart' size={20} color={"#00ECB2"}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})