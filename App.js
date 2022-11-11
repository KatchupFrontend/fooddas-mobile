

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SpecialOffers from './screens/SpecialOffers';
import AllCategories from './screens/AllCategories';
const Stack = createNativeStackNavigator();
export default function App() {
 
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="SpecialOffers" component={SpecialOffers} />
          <Stack.Screen name="AllCategories" component={AllCategories} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


