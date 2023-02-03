//react naitive
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';



const Product = ({product, navigation}) => {

    return (
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('ProductDetails', {
            product: product,
            });
        }}
        className="flex-col items-center ">
        <Image
            source={{uri: product.image}}
            style={{width: 100, height: 100}}
        />
        <Text className="text-lg text-black text-center">{product.title}</Text>
        <Text className="text-lg text-black text-center">{product.price}</Text>
        </TouchableOpacity>
    );
    }