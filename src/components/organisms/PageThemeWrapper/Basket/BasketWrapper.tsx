import { useState, ReactElement } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./BasketWrapperStyles";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import Image from "@/src/components/atoms/Image/Image";
import Text from "@/src/components/atoms/Text/Text";  
import { MaterialIcons } from '@expo/vector-icons';
function BasketWrapper({ children }: { children: ReactElement }) {
  const [search, setSearch] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchInputContainer}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}> <MaterialIcons style={styles.locationIcon} name="location-on" size={24} color="black" /> Ajabpur Khurd, Dehradun</Text>
            <Text style={styles.locationText}>Change Location</Text>
          </View>
          <TextInput
            id="search"
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Search"
          />
          <View style={styles.headerContainer}>
            <View style={styles.headerImageContainer}>
              <Image style={styles.headerImage} source={require("@/src/assets/images/fm.png")} />
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={[styles.text,styles.headerText]}>KHET-TO-KHARIDAR</Text>
              <Text style={styles.text}>
                Fresh, farm-to-table ingredients delivered to your
                restaurant—fast, transparent, and hassle-free with KrishiLinks!
              </Text>
              <Text style={[styles.text, styles.link]}>"Scroll to learn more about KrishiLinks!"</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default BasketWrapper;
