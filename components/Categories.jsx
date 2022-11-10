import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = ({title}) => {
  return (
   <TouchableOpacity>
    <Image source={require('../Assets/images/piz.png')} className="rounded-full w-20 h-20"/>
    <Text className="text-lg text-black text-center">{title}</Text>
   </TouchableOpacity>
  )
}

export default Categories