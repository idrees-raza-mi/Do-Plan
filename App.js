import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/context/ThemeContext';
import { TaskProvider } from './src/context/TaskContext';
import { HabitsProvider } from './src/context/HabitsContext';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import TasksScreen from './src/screens/TasksScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import HabitsScreen from './src/screens/HabitsScreen';
import HabitDetailScreen from './src/screens/HabitDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HabitsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HabitsList" component={HabitsScreen} />
      <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <HabitsProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Tasks') {
                    iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
                  } else if (route.name === 'Calendar') {
                    iconName = focused ? 'calendar' : 'calendar-outline';
                  } else if (route.name === 'Habits') {
                    iconName = focused ? 'book' : 'book-outline';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#8B5CF6',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                  backgroundColor: '#FFFFFF',
                  borderTopWidth: 1,
                  borderTopColor: '#F3F4F6',
                  paddingBottom: 5,
                  paddingTop: 5,
                  height: 60,
                },
                headerShown: false,
              })}
            >
              <Tab.Screen name="Tasks" component={TasksScreen} />
              <Tab.Screen name="Calendar" component={CalendarScreen} />
              <Tab.Screen name="Habits" component={HabitsStack} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </HabitsProvider>
      </TaskProvider>
    </ThemeProvider>
  );
}
