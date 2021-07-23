import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Splash from "./components/Splash";
import Signup from "./components/Signup";
import { NavigationContainer, StackNavigator } from "@react-navigation/native";
import FrontPage from "./components/FrontPage";
import { createStackNavigator } from "@react-navigation/stack";
// import Expo from "expo";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FrontPage"
        component={FrontPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// const App = () => {
//   return (
//     <NavigationApp />
//   );
// };

// export default App;

// slr
