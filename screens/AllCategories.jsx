import { View, Text, ScrollView ,TouchableOpacity, } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
const AllCategories = () => {
    const navigation = useNavigation();
     useLayoutEffect(() => {
       navigation.setOptions({
         headerShown: false,
       });
     }, []);
    
  return (
    <ScrollView>
      <View className="flex-row  mx-5 items-center py-5">
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
        <Text className="text-xl font-bold text-black m-2">More Categories</Text>
      </View>
    
    </ScrollView>
  );
}

export default AllCategories