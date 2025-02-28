import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { ReactElement, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";
import { useRouter } from "expo-router";

export default function TabWrapper({ children }: { children: ReactElement }) {
  const router = useRouter();
  const [hover,setHover] = useState(false)
  const handlePressIn=()=>{
    setHover(true)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.tabSlot}>{children}</View>
      <View style={styles.tabList}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPress={() => router.push("/(app)/dashboard")}
          style={[styles.tabTrigger]}
        >
          <MaterialIcons style={[hover?styles.hover:""]} name="home" size={30} color={"green"} />
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
        <TouchableOpacity
          onPress={() => router.push("/(app)/profile")}
          style={styles.tabTrigger}
        >
          <MaterialIcons name="person" size={30} color={"green"} />
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
  hover: {
    position: "absolute",
    backgroundColor: Colors.white,
    borderRadius: "50%",
    padding: 15,
    bottom: -10,
    fontSize: 40
  }
});
