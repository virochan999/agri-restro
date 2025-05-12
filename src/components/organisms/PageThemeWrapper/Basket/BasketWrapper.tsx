import { useState, ReactElement } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./BasketWrapperStyles";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import Text from "@/src/components/atoms/Text/Text";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuthStore } from "@/src/store/useAuthStore";
function BasketWrapper({ children }: { children: ReactElement }) {
  const [search, setSearch] = useState<string>("");
  const { user } = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainSection}>
          <View style={styles.locationContainer}>
            <Ionicons
              name="menu"
              size={24}
              color="white"
              style={styles.menuIcon}
            />
            <View style={styles.locationBox}>
              <Text style={styles.locationHeading}>DELIVER TO</Text>
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Xyz Lab Office</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.notificationContainer}>
              <Ionicons
                name="notifications"
                size={24}
                color="yellow"
                style={styles.notificationIcon}
              />
              <View style={styles.notificationCountContainer}>
                <Text style={styles.notificationCount}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.searchText}>
              Hey {user?.contactInfo.fullName}! Good Afternoon!
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                id="search"
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholder="What do you want to order?"
                style={styles.input}
              />
              <Ionicons
                name="search"
                size={24}
                color="white"
                style={styles.icon}
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default BasketWrapper;
