import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicTradingScreen from './screens/BasicTradingScreen';
import IndicatorScreen from './screens/IndicatorScreen';
import MarketTypeScreen from './screens/MarketTypeScreen';
import RiskCalcScreen from './screens/RiskCalcScreen';
import DetailScreen from './screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// โครงสร้าง Bottom Tab
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0F172A' },
        headerTintColor: '#F8FAFC',
        tabBarStyle: { backgroundColor: '#1E293B', borderTopColor: '#334155' },
        tabBarActiveTintColor: '#38BDF8',
        tabBarInactiveTintColor: '#64748B',
      }}
    >
      <Tab.Screen name="Basic" component={BasicTradingScreen} options={{ title: 'พื้นฐาน' }} />
      <Tab.Screen name="Tools" component={IndicatorScreen} options={{ title: 'ตัวชี้วัด' }} />
      <Tab.Screen name="Markets" component={MarketTypeScreen} options={{ title: 'ตลาด' }} />
      <Tab.Screen name="Calculator" component={RiskCalcScreen} options={{ title: 'คำนวณ Risk' }} />
    </Tab.Navigator>
  );
}

// โครงสร้าง Stack หลัก
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0F172A' },
          headerTintColor: '#F8FAFC',
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'เนื้อหาบทเรียน' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}