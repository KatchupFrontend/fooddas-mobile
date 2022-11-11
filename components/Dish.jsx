import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, selectCartItems, selectCartItemsWithId} from '../features/cartSlice';

const Dish = ({id, name, description, price, image}) => {
  const items = useSelector((state)=>selectCartItemsWithId(state, id));
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart({id, name, price, description, image}));
  };
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border-gray-200 border ${
          isPressed && 'border-b-0'
        }`}>
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-sm text-gray-500 ">
              {/* Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet
              consectetur adipisicing eli facere provident mollitia sapiente
              ipsa delectu */}
              {description}
            </Text>
            <Text className="">Ghc {price}</Text>
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
        <View className="bg-white px-4">
          <View>
            <TouchableOpacity className="">
              <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity className="">
                  <Icon
                    name="remove-circle"
                    className=""
                    size={40}
                    color="red"
                  />
                </TouchableOpacity>
                <Text className="text-3xl font-bold">{items.length}</Text>
                <TouchableOpacity className="" onPress={addItemToCart}>
                  <Icon
                    name="add-circle"
                    className=""
                    size={40}
                    color="red"
                    o
                  />
                </TouchableOpacity>
              </View>

              {/* <Icon name="remove-outline" size={40} color={items.length > 0 ? "blue" : "gray"} /> */}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dish;
