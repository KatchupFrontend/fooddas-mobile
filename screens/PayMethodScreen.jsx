import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';


const PayMethodScreen = () => {
 const navigation = useNavigation();
 useLayoutEffect(() => {
   navigation.setOptions({
     headerShown: false,
   });
 }, []);


  return (
    <SafeAreaView>
      <View className="bg-white">
        <View className="flex-row m-3  items-center ">
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrow-back" size={33} color="red" />
          </TouchableOpacity>

          <Text className="text-xl m-1 font-bold text-black">
            Select Payment Method
          </Text>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity className="">
          <View className="flex-row space-x-10 px-4 py-8 bg-white my-1 items-center ">
            <Image
              source={require('../Assets/images/MTN.jpg')}
              className=" bg-gray-300 h-10 w-10 "
            />
            <Text className=" text-lg">MTN Mobile Money</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <View className="flex-row space-x-10 px-4 py-8 bg-white my-1 items-center ">
            <Image
              source={require('../Assets/images/MTN.jpg')}
              className=" bg-gray-300 h-10 w-10 "
            />
            <Text className=" text-lg">MTN Mobile Money</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <View className="flex-row space-x-10 px-4 py-8 bg-white my-1 items-center ">
            <Image
              source={require('../Assets/images/MTN.jpg')}
              className=" bg-gray-300 h-10 w-10 "
            />
            <Text className=" text-lg">MTN Mobile Money</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <View className="flex-row space-x-10 px-4 py-8 bg-white my-1 items-center ">
            <Image
              source={require('../Assets/images/MTN.jpg')}
              className=" bg-gray-300 h-10 w-10 "
            />
            <Text className=" text-lg">MTN Mobile Money</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PayMethodScreen