import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { ReactElement } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";
import { useRouter } from "expo-router";

export default function TabWrapper({ children }: { children: ReactElement }) {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.tabSlot}>{children}</View>
      <View style={styles.tabList}>
        <TouchableOpacity
          onPress={() => router.push("/(app)/dashboard")}
          style={styles.tabTrigger}
        >
          <MaterialIcons name="home" size={30} color={"green"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(app)/wishlist")}
          style={styles.tabTrigger}
        >
          <MaterialIcons name="shopping-bag" size={30} color={"green"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(app)/productDetail")}
          style={styles.tabTrigger}
        >
          <MaterialIcons name="wallet" size={30} color={"green"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(app)/profile")}
          style={styles.tabTrigger}
        >
          <MaterialIcons name="shopping-cart" size={30} color={"green"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabSlot: {
    flex: 1,
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 10,
    paddingBlock: 15,
    backgroundColor: Colors.secondary,
    width: "100%",
  },
  tabTrigger: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
