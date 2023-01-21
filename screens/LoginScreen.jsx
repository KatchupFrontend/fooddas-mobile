import React from 'react'

const LoginScreen = () => {
  
   const navigation = useNavigation();
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);
  return (
    <ScrollView>
      <View className="flex-row justify-between mx-4 py-5">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="  bg-gray-100 rounded-full">
          <Icon
            name="arrow-back-outline"
            size={35}
            color="red"
            className="p-4 bg-red-500"
          />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Special Offers</Text>
      </View>
      
    </ScrollView>
    );
}

export default LoginScreen