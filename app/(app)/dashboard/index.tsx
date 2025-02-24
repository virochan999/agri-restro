import { Text, View, ScrollView } from "react-native";
import BasketWrapper from "@/src/components/organisms/PageThemeWrapper/Basket/BasketWrapper";
import styles from "./dashboardStyle";
import { BasketCard } from "@/src/components/atoms/BasketCard";
import { Link } from "expo-router";
import { useState } from "react";
import { ProductItemCard } from "@/src/components/atoms/ProductItemCard";

const Home = () => {
  const [toggleHeart, setToggleHeart] = useState(false)
  const handleHeartPress =()=>{
    setToggleHeart(!toggleHeart)
  }
  const handleAddToCart = ()=>{
    console.log('-------working----------')
  }
  return (
    <BasketWrapper>
      <ScrollView>
        <View style={styles.topContainer}>
          <BasketCard
            imageSrc={require("@/src/assets/images/fruit_basket.png")}
            heading="Buy fresh veggies at just"
            btnText="Shop Now"
          />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainHeading}>
             <Text>Fresh Picks for the day </Text>
             <Link href="/dashboard">View All</Link>
          </View>
          <ProductItemCard addToCart={handleAddToCart} toggleHeart={toggleHeart} onPress={handleHeartPress} />
        </View>
      </ScrollView>
    </BasketWrapper>
  );
};

export default Home;
