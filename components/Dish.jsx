import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-vector-icons/Ionicons';

const Dish = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
       
        className="bg-white p-4 border-gray-200 border">
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">Burger</Text>
            <Text className="text-sm text-gray-500 ">
              Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet
              consectetur adipisicing eli facere provident mollitia sapiente
              ipsa delectu
            </Text>
            <Text className="">Ghc 25</Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: 'gray',
              }}
              source={require('../Assets/images/piz.png')}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View>
          <View>
            <TouchableOpacity>
              <Icon name="remove-outline" size={35} color="red" />
              {/* <Icon name="remove-outline" size={40} color={items.length > 0 ? "blue" : "gray"} /> */}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dish;
