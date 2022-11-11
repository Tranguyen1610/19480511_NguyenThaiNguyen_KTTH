import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Product from '../components/Product'
const data1 = [
    {
      id: 3,
      name: "Sen đá",
      price: 100,
      imgLink: 'https://dalatfarm.net/wp-content/uploads/2021/03/sen-da-minima-govap.jpg',
    },
    {
        id: 4,
        name: "Sen đá chậu",
        price: 100,
        imgLink: 'https://dalatfarm.net/wp-content/uploads/2020/10/sen-da-dat-trang-1.jpg',
    },
  ];
  const data2 = [
    {
      id: 1,
      name: "Sen đá",
      price: 150,
      imgLink: 'https://dalatfarm.net/wp-content/uploads/2021/03/sen-da-minima.jpg',
    },
    {
      id: 2,
      name: "Sen đá cảnh",
      price: 120,
      imgLink: 'https://dalatfarm.net/wp-content/uploads/2021/03/sen-da-minima-gia-re.jpg',
    },
    
  ];
export default function HomeScreen() {
  return (
    <SafeAreaView
        style={{
            flex:1,
        }}>
        <View style={{padding:10}}>
        <View 
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Foundation name='indent-more' size={30}/>
            <Text style={{fontSize:17}}>Welcome</Text>
            <Image 
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACGFpr0iqURE_6EHYMm-AGXfhXC1Nzf4ucA&usqp=CAU'}}
                style={{width:50,height:50,borderRadius:100}}    />
        </View>
        <Text style={{fontSize:23,fontWeight:'500',width:200,}}>Chose Your Favorite Plant</Text>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#D7DCD9',
            padding:10,
            borderRadius:10,
            
        }}>
            <Ionicons name='search' size={30}/>
            <TextInput style={{width:'80%',fontSize:16}} placeholder='Search Product'/>
            <MaterialCommunityIcons name='sort' size={30}/>
        </View>
        <Text style={{fontSize:20,fontWeight:'600',marginTop:10}}>Categories</Text>
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
            }}>
            <Text style={{fontSize:16,fontWeight:'600'}}>Plants</Text>
            <Text style={{fontSize:16}}>Planter</Text>
            <Text style={{fontSize:16}}>Tools</Text>
            <Text style={{fontSize:16}}>Tropical</Text>
            <Text style={{fontSize:16}}>Decor</Text>
        </View>
        <FlatList
            data={data1}
            numColumns={2}
            renderItem={({item})=>
                <Product item={item}/>}
        />
        <Text style={{fontSize:20,fontWeight:'600',marginTop:5}}>Specical Discount</Text>
        <FlatList
            data={data2}
            numColumns={2}
            renderItem={({item})=>
                <Product item={item}/>}
        />
        </View>
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                padding:10,
                backgroundColor:'#DEDCDC',
                borderTopStartRadius:10,
                borderTopEndRadius:10,
            }}>
            <Ionicons name='home' size={25} color={"#00ECB2"}/>
            <Ionicons name='home' size={25} color={"#797A79"}/>
            <Ionicons name='home' size={25} color={"#797A79"}/>
            <Ionicons name='home' size={25} color={"#797A79"}/>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})