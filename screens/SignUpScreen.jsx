import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth } from '../firebase/firebase';
const SignUpScreen = () => {
 
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

   const navigation = useNavigation();
   const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
    }
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigation.navigate('LoginScreen');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };


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
          textContentType='emailAddress'
          value={email}
              onChangeText={(text) => setEmail(text)}

        />
        <TextInput
          placeholder="Enter your password"
          keyboardType="default"
          className=" p-2 border-2 border-gray-300 rounded-lg w-[360px] mt-4 text-lg"
          textContentType='password'
          value={password}
              onChangeText={(text) => setPassword(text)}

        />
        <TextInput
          placeholder="Confirm your password"
          keyboardType="default"
          className=" p-2 border-2 border-gray-300 rounded-lg w-[360px] mt-4 text-lg"
          textContentType='password'
          value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}


        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-red-500 rounded-lg w-[360px] mt-10 py-3">
          <Text className="text-center text-white font-bold text-xl">
            Sign Up
          </Text>
        </TouchableOpacity>


        <Text className="py-4 text-lg">
            Already have an account? <Text onPress={() => navigation.navigate('LoginScreen')} className="text-red-500">Login</Text>


        </Text>
       
       
      </View>
    </ScrollView>
  );
}


export default SignUpScreen