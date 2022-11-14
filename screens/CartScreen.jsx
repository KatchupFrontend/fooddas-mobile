import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectVendor } from '../features/VendorSlice';
import { selectCartItems } from '../features/cartSlice';

const CartScreen = () => {
    const navigation = useNavigation();
    const vendor = useSelector(selectVendor)
    const items = useSelector(selectCartItems)
    const dispatch = useDispatch();


    useMemo(() => {
        const groupedItems = items.reduce(() => {
            (results[item.id] = results[item.id] || []).push(item)
        })
    }, [items])
  return (
    <View className="">
      <Text>
        dfgdfhd
      </Text>
    </View>
  )
}

export default CartScreen