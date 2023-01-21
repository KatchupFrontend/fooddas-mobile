import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const SignUpScreen = () => {
 
   const navigation = useNavigation();
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);
  return (
    <ScrollView className="bg-white">
      <View className="flex-row justify-between mx-4 py-5 ">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          className="  bg-gray-100 rounded-full">
          <Icon
            name="arrow-back-outline"
            size={35}
            color="red"
            className="p-4 bg-red-500"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-col items-center ">
        <Image
          source={require('../Assets/images/logo.png')}
          className="h-14 w-60 rounded-sm  mt-20 "
        />
        <Text className="font-bold pt-8 text-4xl text-black">
          Create New Account
        </Text>

        <TextInput
          placeholder="Enter your email"
          keyboardType="default"
          className=" p-2 border-2 border-gray-300 rounded-lg w-[360px] mt-10  text-lg"
        />
        <TextInput
          placeholder="Enter your password"
          keyboardType="default"
          className=" p-2 border-2 border-gray-300 rounded-lg w-[360px] mt-4 text-lg"
        />
        <TextInput
          placeholder="Confirm your password"
          keyboardType="default"
          className=" p-2 border-2 border-gray-300 rounded-lg w-[360px] mt-4 text-lg"
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          className="bg-red-500 rounded-lg w-[360px] mt-10 py-3">
          <Text className="text-center text-white font-bold text-xl">
            Sign Up
          </Text>
        </TouchableOpacity>
       
       
      </View>
    </ScrollView>
  );
}


export default SignUpScreen