// import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScreenHome,
  ScreenClients,
  ScreenEquipment,
  ScreenJobs,
  ScreenPersonalSchedule,
} from "./screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={ScreenHome} />
      <Stack.Screen name="Clients" component={ScreenClients} />
      <Stack.Screen name="Equipment" component={ScreenEquipment} />
      <Stack.Screen name="Jobs" component={ScreenJobs} />
      <Stack.Screen
        name="PersonalSchedule"
        component={ScreenPersonalSchedule}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
