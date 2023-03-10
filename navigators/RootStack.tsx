import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// custom imports
import Home from "./../screens/Home";
import Welcome from "./../screens/Welcome";
import { colors } from "./../components/colors";
import Profile from "../components/Header/Profile";
import Greeting from "../components/Header/Greeting";

import Avi from "../assets/avi/avatar.png";

export type RootStackParamList = {
    Home: undefined;
    Welcome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight: 25,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10,
                    },
                    headerRight: () => <Profile img={Avi} />
                }}
                initialRouteName="Welcome"
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: (props) => (
                            <Greeting
                                mainText="Hey Ansh !"
                                subText="Welcome back !"
                                {...props}
                            />
                        ),
                        headerLeft: () => <></>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;