import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Balance {
  tag: string;
  saldo: number;
}

interface DataProps {
  data: Balance;
}

export function BalanceItem({ data }: DataProps): React.JSX.Element {
  const labelName = useMemo(() => {
    if (data.tag === "saldo") {
      return {
        label: "Saldo atual",
        color: "#3b3dbf",
      };
    }

    if (data.tag === "receita") {
      return {
        label: "Entradas de hoje",
        color: "#00b94a",
      };
    }

    return {
      label: "Saidas de hoje",
      color: "#ef463a",
    };
  }, [data]);

  return (
    <View style={[styles.container, { backgroundColor: `${labelName.color}` }]}>
      <Text style={styles.label}>{labelName.label}</Text>
      <Text style={styles.balance}>R$ {data.saldo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginInline: 14,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    width: 300,
    paddingLeft: 14,
  },
  label: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "bold",
  },
  balance: {
    color: "#FFF",
    marginTop: 5,
    fontSize: 30,
  },
});
