import DetailWrapper from "@/src/components/organisms/PageThemeWrapper/DetailWrapper/DetailWrapper";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./detailStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Rating from "@/src/components/atoms/Rating/Rating";
function detail() {
  const [rating, setRating] = useState<number>(0);
  const handleStarPress = (val: number) => {
    setRating(val);
  };
  return (
    <DetailWrapper>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/src/assets/images/potato-sack.png")}
            style={styles.productImage}
          />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Potato</Text>
            <Text style={styles.subHeading}>25/kg</Text>
          </View>
          <View>
            <View style={styles.locationHeading}>
              <MaterialIcons name="location-on" size={24} color="black" />
              <Text style={styles.location}>Location</Text>
            </View>
            <View style={styles.locationContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <View key={index} style={styles.locationBox}></View>
              ))}
            </View>
            <View style={styles.discriptionContainer}>
              <Text style={styles.subHeading}>Description</Text>
              <Text style={{ marginTop: 10 }}>
                The potato is a starchy tuberous vegetable native to the
                Americas that is consumed as a staple food in many parts of the
                world. Potatoes are underground tubers of the plant Solanum
                tuberosum, a perennial in the nightshade family Solanaceae
              </Text>
            </View>
            <View style={styles.customContainer}>
              <View>
                <Text style={styles.customerHeading}>Customers say</Text>
                <View style={styles.subCustomerHeading}>
                  <MaterialIcons name="person" size={24} color="black" />
                  <Text>Mira Malhotra </Text>
                </View>
                <Rating rating={rating} handleStarPress={handleStarPress} />
                <Text>
                  Amazing quality produce, really loved the pure vibrant color
                  of the veggie.
                </Text>
              </View>
            </View>
            <View style={styles.customContainer}>
              <View style={styles.reviewHeader}>
                <View>
                  <Text>Customer reviews</Text>
                  <Rating rating={rating} handleStarPress={handleStarPress} />
                </View>
                <MaterialIcons name="arrow-right" color="black" size={25} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </DetailWrapper>
  );
}

export default detail;
