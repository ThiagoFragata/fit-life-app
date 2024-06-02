import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RFValue } from 'react-native-responsive-fontsize';

import { Home, Plus, User } from '@/assets';
import HomeScreen from '@/screens/private/bottomTabs/home/screens/homeScreen';
import PostScreen from '@/screens/private/bottomTabs/post/screens/postScreen';
import ProfileScreen from '@/screens/private/bottomTabs/profile/screens/profileScreen';
import theme from '@/styles/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.secondary[50],
        tabBarInactiveTintColor: theme.colors.secondary[500],
        tabBarActiveBackgroundColor: theme.colors.secondary[500],
        tabBarStyle: {
          backgroundColor: 'rgba(255, 244, 237, 0.75)',
          borderRadius: RFValue(32),
          position: 'absolute',
          left: '25%',
          right: '25%',
          bottom: RFValue(20),
          height: RFValue(40),
        },
        tabBarItemStyle: {
          marginVertical: RFValue(4),
          marginHorizontal: RFValue(4),
          borderRadius: RFValue(32),
          height: RFValue(32),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ color }) => <Plus color={color} />,
          tabBarStyle: {
            display: 'none',
          },
          tabBarIconStyle: {
            color: theme.colors.primary[50],
          },
        }}
      />
    </Tab.Navigator>
  );
}

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
