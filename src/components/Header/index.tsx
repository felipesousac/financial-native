import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "@react-native-vector-icons/feather";
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../routes/routesTypes';

interface HeaderProps {
    title: string
}

export function Header({ title }: HeaderProps) {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.buttonMenu}
                onPress={() => navigation.openDrawer()}
            >
                <Icon name="menu" size={35} color="#121212"/>
            </TouchableOpacity>

            {title && (
                <Text
                    style={styles.title}
                >
                    {title}
                </Text>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 15,
        width: "100%",
        maxHeight: 60
    },
    title: {
        fontSize: 22,
        marginLeft: 8
    },
    buttonMenu: {
        justifyContent: "center",
        alignItems: "center"
    }
});