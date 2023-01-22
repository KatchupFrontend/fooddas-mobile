import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const VendorCard = ({id, title, description, rating, address,dishes,}) => {
const navigation = useNavigation();



  return (
    <TouchableOpacity className="mx-2 bg-gray-200 shadow-lg m-2 " onPress={() =>{
      navigation.navigate('DetailScreen', {id, title, description, rating, address,dishes,})
    }}>
      <Image
        source={require('../Assets/images/burger.png')}
        className="h-36 w-[343px] rounded-sm "
      />
      <View className="px-3 pb-1 bg-white">
        <View className="flex-row items-center">
          <Text className="font-bold text-lg px-3 text-black">{title}</Text>
          </View>

      
        <Text className="text-sm text-gray-500">{description}</Text>
        <Text className="text-sm text-gray-500">{address}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default VendorCard