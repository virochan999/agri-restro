import { Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { ReactElement } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";

export default function TabWrapper({ children }: { children: ReactElement }) {
  const handlePressIn = () => {
    console.log("here we are");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs>
        <TabSlot style={styles.tabSlot}>{children}</TabSlot>
        <TabList style={styles.tabList}>
          <TabTrigger name="home" href="/" style={styles.tabTrigger}>
            <Pressable onPressIn={handlePressIn}>
              <MaterialIcons name="home" size={30} color={"green"} />
            </Pressable>
          </TabTrigger>

          <TabTrigger
            name="Owner"
            href="/(app)/wishlist"
            style={styles.tabTrigger}
          >
            <MaterialIcons name="shopping-bag" size={30} color={"green"} />
          </TabTrigger>
          <TabTrigger
            name="wallet"
            href="/(app)/productDetail"
            style={styles.tabTrigger}
          >
            <MaterialIcons name="wallet" size={30} color={"green"} />
          </TabTrigger>
          <TabTrigger
            name="shoppingCart"
            href="/(app)/businessDetails"
            style={styles.tabTrigger}
          >
            <MaterialIcons name="shopping-cart" size={30} color={"green"} />
          </TabTrigger>
        </TabList>
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabSlot: {
    flex: 1,
  },
  tabList: {
    display: "flex",
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
