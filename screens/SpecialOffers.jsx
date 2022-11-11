import { View, Text, ScrollView , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';



const SpecialOffers = () => {


   const navigation = useNavigation();
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);
  return (
    <ScrollView>
      <View className="flex-row justify-between mx-4 py-5">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="  bg-gray-100 rounded-full">
          <Icon
            name="arrow-back-outline"
            size={35}
            color="red"
            className="p-4 bg-red-500"
          />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Special Offers</Text>
      </View>
      <View className="flex-col items-center ">
        <Image source={require('../Assets/images/flyer.png')} className="m-3" />
        <Image source={require('../Assets/images/flyer.png')} className="m-3" />
        <Image source={require('../Assets/images/flyer.png')} className="m-3"/>
        <Image source={require('../Assets/images/flyer.png')} className="m-3"/>
      
      </View>
    </ScrollView>
  );
}

export default SpecialOffers