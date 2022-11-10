import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

 
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
    <View>
        <Image source={require('./Assets/images/')} />
    </View>
    </ScrollView>
  )
}

export default DetailScreen