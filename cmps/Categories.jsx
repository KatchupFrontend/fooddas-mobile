import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Categories = ({title}) => {
  const navigation = useNavigation();
  return (
   <TouchableOpacity onPress={()=>{
      navigation.navigate('FoodListingScreen')
   }}>
    <Image source={require('../Assets/images/ice.png')} className="rounded-full w-20 h-20"/>
    <Text className="text-lg text-black text-center">{title}</Text>
   </TouchableOpacity>
  )
}

export default Categories