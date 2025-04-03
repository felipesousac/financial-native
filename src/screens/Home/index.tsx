import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';
import { api } from '../../services/api';

interface Balance {
    saldo: number;
    tag: string
}

export function Home() {
    const { signOut,  ...user} = useContext(AuthContext);
    const [listBalance, setListBalance] = useState<Balance>();
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        const getMovementsFromToday = async () => {
            const formatedDate = format(date, "dd/MM/yyyy");

            const balance = await api.get("/balance", {
                params: {
                    date: formatedDate
                }
            })
            
            if (isActive) {
                setListBalance(balance.data);
            }
        }

        getMovementsFromToday();
        return () => {isActive = false};
    }, []);

    return (
        <SafeAreaView
            style={styles.background}
        >
            <Header title="Minhas movimentações"/>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F0F4FF"
    }
})