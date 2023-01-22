import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
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
          Login to Your Account
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          className="bg-red-500 rounded-lg w-[360px] mt-10 py-3">
          <Text className="text-center text-white font-bold text-xl">
            Login
          </Text>
        </TouchableOpacity>

        <Text className="py-4 font-bold  text-lg">Or continue with</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          className="bg-white border-gray-500  border w-[360px] p-2 rounded-lg flex-row justify-center">
          <View className=" flex-row items-center">
            <Image
              source={require('../Assets/images/google.png')}
              className="h-10 w-10 "
            />
            <Text className="text-2xl font-bold px-4">Google</Text>
          </View>
        </TouchableOpacity>

        <Text className="my-2 text-lg">
          Don't have an account?
          <Text
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
            className="text-red-500  text-lg">
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
