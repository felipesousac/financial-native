import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../contexts/auth';
import { ActivityIndicator, View } from 'react-native';

function Routes(): React.JSX.Element {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F0F4FF"
                }}
            >
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        )
    }

    return (
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;