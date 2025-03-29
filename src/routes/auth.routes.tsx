import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(): React.JSX.Element {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />

            <AuthStack.Screen 
                name='SignUp'
                component={SignUp}
                options={{
                    headerTitle: 'Voltar',
                    headerTintColor: '#FFF',
                    headerStyle: { backgroundColor: '#3b3dbf' },
                    // does not exist after upgrading version, search for workarounds
                    //headerBackTitleVisible: false
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;