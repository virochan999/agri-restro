import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { ReactElement } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";
import { useRouter, usePathname } from "expo-router";
import { TAB_CONFIG, TabConfig } from "@/src/config/navigation";
import { AppRoutePaths } from "@/src/types/routes";
import { IonIconTypes } from "@/src/types/ionIcons";
import { MaterialIconTypes } from "@/src/types/materialIcons";
import { styles } from "./TabWrapperStyles";

export default function TabWrapper({ children }: { children: ReactElement }) {
  const router = useRouter();
  const pathname = usePathname();

  // Renders the appropriate icon based on the tab configuration
  const renderIcon = (tab: TabConfig, isActive: boolean) => {
    const commonProps = {
      size: 24,
      color: isActive ? Colors.green : Colors.green,
    };

    if (tab.iconFamily === "Ionicons") {
      return <Ionicons name={tab.icon as IonIconTypes} {...commonProps} />;
    } else {
      return <MaterialIcons name={tab.icon as MaterialIconTypes} {...commonProps} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.tabSlot}>{children}</View>
      <View style={styles.tabList}>
        {TAB_CONFIG.map((tab, index) => {
          const isActive = pathname.startsWith(tab.route);
          return (
            <TouchableOpacity
              key={index}
              onPress={() => router.push(tab.route as AppRoutePaths)}
              style={styles.tabTrigger}
              activeOpacity={0.7}
            >
              <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>
                {renderIcon(tab, isActive)}
              </View> 
              {isActive && <Text style={styles.tabLabel}>{tab.label}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}