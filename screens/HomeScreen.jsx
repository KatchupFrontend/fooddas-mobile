import { View, Text, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const HomeScreen = () => {
   const navigation = useNavigation();
 useLayoutEffect(() => {

     navigation.setOptions({
       headerShown:false,
    });
  }, []);
        

  return (
    <SafeAreaView className="bg-white">
      <View className="mx-2">
        <View className="m-1">
          <Text className="font-extrabold text-2xl text-black  mt-2">
            Hi Sam!
          </Text>
        </View>
        <View className="flex">
          <Text className="text-lg">
            <Icon name="location-outline" size={17} color="blue" /> Location,
            Main City-Kumasi
            <Icon name="chevron-down-outline" size={20} color="blue" />
          </Text>
        </View>
      </View>
      <View className="my-4 space-x-2 flex-row items-center">
        <View className="flex-row flex-1 bg-gray-200 items-center mx-2 rounded-md px-3">
          <Icon name="search-outline" size={20} color="blue"  />
          <TextInput
            placeholder="Search your food or restaurants"
            keyboardType="default"
            className=" p-2 "
          />
        </View>
        <View className="flex-row  items-center ">
          <Icon name="options-outline" size={30} color="blue" />
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen