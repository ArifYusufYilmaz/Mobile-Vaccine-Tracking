import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';



function VaccineCalendarScreen(){
return(
    <View>
        <Text>
            hi vaccine
        </Text>
    </View>
);
}
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
            <Stack.Screen name="VaccineCalendar" component={VaccineCalendarScreen}></Stack.Screen>
        </Stack.Navigator>
    );
    
}




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeStack" component={HomeStack}></Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}