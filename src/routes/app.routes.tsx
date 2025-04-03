import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { RootStackParamList } from './routesTypes';

const AppDrawer = createDrawerNavigator<RootStackParamList>();

function AppRoutes(): React.JSX.Element {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen 
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: "#FFF",
                        paddingTop: 20
                    },
                    drawerActiveBackgroundColor: "#3b3dbf",
                    drawerActiveTintColor: "#FFF",
                    drawerInactiveBackgroundColor: "F0F2FF",
                    drawerInactiveTintColor: "#121212"
                }}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;