import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PersonScreen from '../Screens/PersonScreen';
import TrackingPeopleForVaccineInfo from '../Screens/TrackingPeopleForVaccineInfo';
import VaccineCalendarScreen from '../Screens/VaccineCalendarScreen';
import VaccineListScreen from '../Screens/VaccineListScreen';
import VaccineReminderScreen from '../Screens/VaccineReminderScreen';
import TrackingPeopleForVaccineReminder from '../Screens/TrackingPeopleForVaccineReminder';




function ProfileScreen(){
    return(
        <View>
            <Text>
                hi profile
            </Text>
        </View>
    );
    }

function HomeStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Person" component={PersonScreen}></Stack.Screen>
            <Stack.Screen name="TrackingPeopleForVaccineInfo" component={TrackingPeopleForVaccineInfo}></Stack.Screen>
            <Stack.Screen name="TrackingPeopleForVaccineReminder" component={TrackingPeopleForVaccineReminder}></Stack.Screen>
            <Stack.Screen name="VaccineCalendarScreen" component={VaccineCalendarScreen}></Stack.Screen>
            <Stack.Screen name="VaccineList" component={VaccineListScreen}></Stack.Screen>
            <Stack.Screen name="VaccineReminder" component={VaccineReminderScreen}></Stack.Screen>
        </Stack.Navigator>
    );
    
}




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown : false, tabBarStyle:{display: "none"}} }>
                <Tab.Screen name="HomeStack" component={HomeStack}></Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        
    }
})