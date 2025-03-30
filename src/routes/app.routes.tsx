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
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;