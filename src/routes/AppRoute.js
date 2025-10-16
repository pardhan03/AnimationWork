import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Setting from "../screens/Setting";
import CustomBottomTab from "./Bottom-Tabs/CustomBottomTab"

// export const screenNames = {
//   'Home': HomeScreen,
//   'Tickets': Tickets,
//   'Wallet': Wallet,
//   'Profile': Profile,
// }

//   let List = [
//     {
//       screen_name: 'Home',
//       image: img.HomeInActiveTabIcon,
//       title: 'Home',
//       id: 1
//     },
//     {
//       screen_name: 'Tickets',
//       image: img.TicketInActiveTabIcon,
//       title: 'Tickets',
//       id: 2
//     },
//     {
//       screen_name: 'Wallet',
//       image: img.WalletInActiveTabIcon,
//       title: 'Wallet',
//       id: 3
//     },
//     {
//       screen_name: 'Profile',
//       image: img.ProfileInActiveTabIcon,
//       title: 'Profile',
//       id: 4
//     },
//   ];

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomBottomTab {...props} />}
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
      <NavigationContainer>
          <HomeStack/>
      </NavigationContainer>
  );
}