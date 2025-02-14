import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Graphics, Tables } from "@features/index";
import { Ionicons } from "@expo/vector-icons";
import colors from "@theme/colors";

const Tab = createBottomTabNavigator();
const MenuTabs: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={
                route.name === "Graphics" ? "bar-chart-outline" : "grid-outline"
              }
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: colors.blue50,
          tabBarInactiveTintColor: colors.gray50,
          tabBarStyle: {
            backgroundColor: colors.gray,
            borderTopWidth: 0,
            elevation: 0,
          },
        })}
      >
        <Tab.Screen name="Graphics" component={Graphics} />
        <Tab.Screen name="Tables" component={Tables} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MenuTabs;
