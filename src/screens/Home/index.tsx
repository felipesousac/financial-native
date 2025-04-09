import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
import { api } from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { BalanceItem } from "../../components/BalanceItem";

export function Home(): React.JSX.Element {
  const { signOut, ...user } = useContext(AuthContext);
  const [listBalance, setListBalance] = useState();
  const [todayDate, setTodayDate] = useState(new Date());
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    const getMovementsFromToday = async () => {
      const formatedDate = format(todayDate, "dd/MM/yyyy");

      const balance = await api.get("/balance", {
        params: {
          todayDate: formatedDate,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
      }
    };

    getMovementsFromToday();
    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.background}>
      <Header title="Minhas movimentações" />
      <FlatList
        style={styles.listBalance}
        data={listBalance}
        horizontal={true}
        keyExtractor={(item) => item.tag}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F0F4FF",
  },
  listBalance: {
    maxHeight: 190,
  },
});
