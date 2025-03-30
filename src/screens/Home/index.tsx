import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export function Home() {
    const { signOut,  ...user} = useContext(AuthContext);

    return (
        <View>
            <Text>Olá, {user.name}</Text>
            <Button
                title="Sair"
                onPress={() => signOut()}
            />

        </View>
    )
}