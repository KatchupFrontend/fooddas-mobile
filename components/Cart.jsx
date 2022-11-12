import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectBasketTotal, selectCartItems , selectCartTotal} from '../features/cartSlice'
import { useSelector } from 'react-redux'


const Cart = () => {
    const items = useSelector(selectCartItems);
    const navigation = useNavigation();
    const cartTotal = useSelector(selectCartTotal);
  return (
    <View className="absolute w-full bottom-10 z-30 ">
      <TouchableOpacity className=" bg-red-500 mx-5 p-4 rounded-lg   flex-row items-center space-x-1">
        <Text className="text-white font-bold bg-red-800 py-1 px-2 rounded-md">
          {items.length}
        </Text>
        <Text className=" flex-1 text-white font-extrabold text-lg text-center">
          View Cart
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart