import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectVendor } from '../features/VendorSlice';
import { selectCartItems } from '../features/cartSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';

const CartScreen = () => {
    const navigation = useNavigation();
    const vendor = useSelector(selectVendor)
    const items = useSelector(selectCartItems)
    const [groupedItems, setGroupedItemsInCArt] = useState([]);
    const dispatch = useDispatch();


    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
        })
        setGroupedItemsInCArt(groupedItems);
    }, [items])
  return (
   <SafeAreaView>
    <view>
      <View>
        <Text>CART</Text>
        <Text>vendor</Text>
      </View>
      <TouchableOpacity onPres={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-3">
        <Icon color="blue" height={50} width={50} />
      </TouchableOpacity>
    </view>
   </SafeAreaView>
  )
}

export default CartScreen