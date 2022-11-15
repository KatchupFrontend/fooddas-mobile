import { View, Text, TouchableOpacity } from 'react-native'
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
      <View>
        <View className="flex-row m-3 justify-between items-center ">
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrow-back" size={33} color="red" />
          </TouchableOpacity>

          <Text className="text-lg font-bold text-black">
            Select Payment Method
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PayMethodScreen