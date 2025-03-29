import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';

const AppDrawer = createDrawerNavigator();

function AppRoutes(): React.JSX.Element {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen 
                name='Home'
                component={Home}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;