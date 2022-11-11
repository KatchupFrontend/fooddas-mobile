import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Ionicons';
import Dish from '../components/Dish';
 
const DetailScreen = () => {
   
    const {params: {
        id,
        title,
        description,
        rating,
        address,
        dishes,
    }} = useRoute();

     const navigation = useNavigation();
     useLayoutEffect(() => {
       navigation.setOptions({
         headerShown: false,
       });
     }, []);
    
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={require('../Assets/images/burger.png')}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute  top-5 left-2 bg-gray-100 rounded-full">
          <Icon
            name="arrow-back-outline"
            size={35}
            color="red"
            className="absolute top-5 left-5 "
          />
        </TouchableOpacity>
      </View>
      <View className="bg-white pt-4">
        <View className="px-4  ">
          <Text className="text-3xl font-bold text-red-500 ">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center">
              <Icon
                name="star-outline"
                size={22}
                color="red"
                opacity={0.5}
                className="m-2"
              />
              <Text className="text-sm text-gray-500  p-2">{rating}</Text>
              <Text>{dishes}</Text>
              <View className="p-2">
                <Text>{address}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl text-black">
          Menu
        </Text>
        <Dish 
        id={1}
          name="Burger"
          description="lorem loremdkfnkdfnkndfgkdnfkgndkfdkfngkdfnkgndfkgnkdfngdf "
          price=" 20"
          image={require('../Assets/images/burger.png')}
        />
        <Dish
        id={2}
          name="Chips"
          description="lorem loremdkfnkdfnkndfgkdnfkgndkfdkfngkdfnkgndfkgnkdfngdf "
          price=" 20"
          image={require('../Assets/images/burger.png')}
        />
        <Dish 
        id={3}
          name="Pizza"
          description="lorem loremdkfnkdfnkndfgkdnfkgndkfdkfngkdfnkgndfkgnkdfngdf "
          price=" 20"
          image={require('../Assets/images/burger.png')}
        />
      </View>
    </ScrollView>
  );
}

export default DetailScreen