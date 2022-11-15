import { View, Text , TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectVendor } from '../features/VendorSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../features/cartSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';

const CartScreen = () => {
    const navigation = useNavigation();
    const vendor = useSelector(selectVendor)
    const cartTotal = useSelector(selectCartTotal);
    const items = useSelector(selectCartItems)
    const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);
    const dispatch = useDispatch();


    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
        })
        setGroupedItemsInCart(groupedItems);
    }, [items])
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-red-300 bg-white shadow-xl ">
          <Text className="text-lg font-bold text-center text-black">CART</Text>
          
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="rounded-full bg-vlue-500 absolute top-3 right-3">
          <Icon color="red" size={40} name="close-circle-sharp" />
        </TouchableOpacity>
        <View className="flex-row space-x-10 px-4 py-3 bg-white my-5 items-center ">
          <Image
            source={require('../Assets/images/piz.png')}
            className=" bg-gray-300 h-10 w-10 "
          />
          <Text className=" text-lg">Deliver in 50-75 min</Text>
          <TouchableOpacity className="">
            <Text className="text-red-500 ">Change</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView className="divide-y divide-gray-300 ">
            {Object.entries(groupedItemsInCart).map(([key, items]) => (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5 ">
                <Text className="">{items.length}x</Text>
                <Image
                  source={require('../Assets/images/piz.png')}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1 ">{items[0]?.name}</Text>
                <Text>{items[0]?.price}</Text>
                <TouchableOpacity>
                  <Text
                    className="text-red-500 text-xs"
                    onPress={() => dispatch(removeFromCart({id: key}))}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between bg-white items-center ">
              <Text className="text-gray-400 text-lg">Subtotal</Text>
              <Text className="text-gray-400 text-lg">{cartTotal}</Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row justify-between bg-white items-center px-5">
              <Text className="text-gray-400 text-lg">Delivery fee</Text>
              <Text className="text-gray-400 text-lg">{cartTotal}</Text>
            </View>
          </View>
          <View className="flex-row justify-between bg-white items-center px-5 mb-2">
            <Text className="text-black font-extrabold text-lg">Order Total</Text>
            <Text className="text-black font-extrabold text-lg">{cartTotal + 4}.00</Text>
          </View>
          <TouchableOpacity className="rounded-lg bg-red-500 p-4 mx-4" onPress={()=>
            navigation.navigate('PayMethodScreen')
          }>
         
            <Text className="text-center text-lg font-bold text-white">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CartScreen