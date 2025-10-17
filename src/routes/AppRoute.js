import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Setting from "../screens/Setting";
import CustomBottomTab from "./Bottom-Tabs/CustomBottomTab"

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Setting" component={Setting}/>
    </Tab.Navigator>
  )
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="TabScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="TabScreen" component={BottomTabs} />
        </Stack.Navigator>
    )
}

export default function AppRoutes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
          <HomeStack/>
      </NavigationContainer>
    </SafeAreaView>
  );
}