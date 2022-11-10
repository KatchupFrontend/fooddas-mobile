import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
const DetailScreen = () => {
    const {params: {
        id,
        title,
        description,
        rating,
        address,
        dishes,
    }} = useRoute();
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default DetailScreen