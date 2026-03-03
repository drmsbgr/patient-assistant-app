import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0ea5e9', // primary color
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 85 : 65,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f1f5f9'
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color }) => <TabBarIcon name="Home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="symptoms"
        options={{
          title: 'Belirtiler',
          tabBarIcon: ({ color }) => <TabBarIcon name="Activity" color={color} />,
        }}
      />
      <Tabs.Screen
        name="medical"
        options={{
          title: 'Tıbbi Takip',
          tabBarIcon: ({ color }) => <TabBarIcon name="FileText" color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Deneyimler',
          tabBarIcon: ({ color }) => <TabBarIcon name="Users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Bilgi',
          tabBarIcon: ({ color }) => <TabBarIcon name="Info" color={color} />,
        }}
      />
    </Tabs>
  );
}

// Temporary Mock Icon component
function TabBarIcon({ name, color }: { name: string; color: string }) {
  return (
    <Text style={{ color, fontSize: 20 }}>
      {name === 'Home' ? '🏠' :
        name === 'Activity' ? '📈' :
          name === 'FileText' ? '📄' :
            name === 'Users' ? '👥' : 'ℹ️'}
    </Text>
  );
}

import { Text } from 'react-native';

